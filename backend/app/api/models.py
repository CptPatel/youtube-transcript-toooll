from typing import List, Optional, Dict, Any
from pydantic import BaseModel, HttpUrl


class TranscriptRequest(BaseModel):
    url: HttpUrl
    lang: Optional[str] = None
    formats: List[str] = ["txt", "srt", "vtt", "json"]


class TranscriptResponse(BaseModel):
    success: bool
    video_id: Optional[str] = None
    source_url: Optional[str] = None
    language_used: Optional[str] = None
    available_languages: Optional[List[str]] = None
    transcript_preview: Optional[str] = None
    download_urls: Optional[Dict[str, str]] = None
    error: Optional[str] = None


class BulkTranscriptRequest(BaseModel):
    urls: List[HttpUrl]
    lang: Optional[str] = None
    formats: List[str] = ["txt", "srt", "vtt", "json"]


class BulkItemResponse(BaseModel):
    url: str
    video_id: Optional[str] = None
    success: bool
    download_urls: Optional[Dict[str, str]] = None
    error: Optional[str] = None


class BulkTranscriptResponse(BaseModel):
    success: bool
    results: List[BulkItemResponse]
