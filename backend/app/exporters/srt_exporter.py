from typing import List, Dict, Any


def seconds_to_srt_timestamp(seconds: float) -> str:
    """Convert seconds to SRT timestamp format (HH:MM:SS,mmm)."""
    millis = int((seconds - int(seconds)) * 1000)
    seconds = int(seconds)
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    return f"{hours:02}:{minutes:02}:{secs:02},{millis:03}"


def transcript_to_srt(segments: List[Dict[str, Any]]) -> str:
    """Convert transcript segments to SRT subtitle format."""
    srt_lines = []
    for idx, seg in enumerate(segments, start=1):
        start = seg["start"]
        duration = seg.get("duration", 0)
        end = start + duration

        start_ts = seconds_to_srt_timestamp(start)
        end_ts = seconds_to_srt_timestamp(end)

        text = seg["text"].replace("\n", " ").strip()

        srt_lines.append(str(idx))
        srt_lines.append(f"{start_ts} --> {end_ts}")
        srt_lines.append(text)
        srt_lines.append("")  # blank line

    return "\n".join(srt_lines)
