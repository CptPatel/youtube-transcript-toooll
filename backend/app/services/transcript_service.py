import os
import re
from typing import List, Optional, Dict, Any

from fastapi import HTTPException
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound, VideoUnavailable

from app.exporters.txt_exporter import transcript_to_txt
from app.exporters.srt_exporter import transcript_to_srt
from app.exporters.vtt_exporter import transcript_to_vtt
from app.storage.local_storage import save_text_file, save_json_file


YOUTUBE_ID_REGEXES = [
    r"(?:v=|vi=)([0-9A-Za-z_-]{11})",              # https://www.youtube.com/watch?v=VIDEOID
    r"(?:https?://youtu\.be/)([0-9A-Za-z_-]{11})", # https://youtu.be/VIDEOID
    r"(?:shorts/)([0-9A-Za-z_-]{11})",             # https://www.youtube.com/shorts/VIDEOID
]


def extract_video_id(url: str) -> str:
    """Extract YouTube video ID from various URL formats."""
    for pattern in YOUTUBE_ID_REGEXES:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    # fallback: sometimes params come after
    # /watch?v=VIDEOID&...
    if "watch?v=" in url:
        vid = url.split("watch?v=")[1][:11]
        if len(vid) == 11:
            return vid
    raise HTTPException(status_code=400, detail="Invalid or unsupported YouTube URL")


def list_available_languages(video_id: str) -> List[str]:
    """Get list of available transcript languages for a video."""
    transcripts = YouTubeTranscriptApi.list_transcripts(video_id)
    langs = []
    for t in transcripts:
        langs.append(t.language_code)
    return langs


def fetch_transcript(video_id: str, lang: Optional[str] = None) -> Dict[str, Any]:
    """
    Fetch transcript for a video.
    
    Returns a dict:
    {
      "language_used": "en",
      "available_languages": [...],
      "transcript": [...]
    }
    """
    try:
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
    except (TranscriptsDisabled, VideoUnavailable) as e:
        raise HTTPException(status_code=404, detail="Transcript not available for this video")

    # collect all languages
    available_langs = [t.language_code for t in transcript_list]

    # choose which transcript to fetch
    transcript_obj = None

    # 1. user-requested language
    if lang:
        try:
            transcript_obj = transcript_list.find_transcript([lang])
        except NoTranscriptFound:
            transcript_obj = None

    # 2. try english
    if transcript_obj is None:
        try:
            transcript_obj = transcript_list.find_transcript(["en", "en-US", "en-GB"])
        except NoTranscriptFound:
            transcript_obj = None

    # 3. fallback: first available
    if transcript_obj is None:
        # just pick the first one
        transcript_obj = list(transcript_list._manually_created_transcripts.values())[0] \
            if transcript_list._manually_created_transcripts \
            else list(transcript_list._generated_transcripts.values())[0]

    # now fetch actual transcript
    transcript_data = transcript_obj.fetch()

    return {
        "language_used": transcript_obj.language_code,
        "available_languages": available_langs,
        "transcript": transcript_data,
    }


def process_single_transcript(url: str, lang: Optional[str], formats: List[str]) -> Dict[str, Any]:
    """
    Process a single transcript request.
    
    TODO: Move storage to S3/Supabase for production
    """
    video_id = extract_video_id(url)

    data = fetch_transcript(video_id, lang)

    transcript_segments = data["transcript"]
    language_used = data["language_used"]
    available_languages = data["available_languages"]

    # make sure exports dir exists
    base_dir = os.path.join("exports", video_id)
    os.makedirs(base_dir, exist_ok=True)

    download_urls: Dict[str, str] = {}

    # TXT
    if "txt" in formats:
        txt_content = transcript_to_txt(transcript_segments)
        save_text_file(base_dir, "transcript.txt", txt_content)
        download_urls["txt"] = f"/files/{video_id}/transcript.txt"

    # SRT
    if "srt" in formats:
        srt_content = transcript_to_srt(transcript_segments)
        save_text_file(base_dir, "transcript.srt", srt_content)
        download_urls["srt"] = f"/files/{video_id}/transcript.srt"

    # VTT
    if "vtt" in formats:
        vtt_content = transcript_to_vtt(transcript_segments)
        save_text_file(base_dir, "transcript.vtt", vtt_content)
        download_urls["vtt"] = f"/files/{video_id}/transcript.vtt"

    # JSON (raw)
    if "json" in formats:
        save_json_file(base_dir, "transcript.json", transcript_segments)
        download_urls["json"] = f"/files/{video_id}/transcript.json"

    # preview
    preview = " ".join([seg["text"] for seg in transcript_segments])[:300]

    return {
        "success": True,
        "video_id": video_id,
        "source_url": url,
        "language_used": language_used,
        "available_languages": available_languages,
        "transcript_preview": preview,
        "download_urls": download_urls,
    }


def process_single_transcript_safe(url: str, lang: Optional[str], formats: List[str]) -> Dict[str, Any]:
    """
    Safe wrapper for bulk calls — never raises, always returns a dict.
    """
    try:
        result = process_single_transcript(url, lang, formats)
        return {
            "url": url,
            "video_id": result["video_id"],
            "success": True,
            "download_urls": result["download_urls"],
        }
    except HTTPException as e:
        return {
            "url": url,
            "video_id": None,
            "success": False,
            "error": e.detail,
        }
    except Exception as e:
        return {
            "url": url,
            "video_id": None,
            "success": False,
            "error": str(e),
        }
