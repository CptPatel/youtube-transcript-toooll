from fastapi import APIRouter, HTTPException
from typing import List

from app.api.models import (
    TranscriptRequest,
    TranscriptResponse,
    BulkTranscriptRequest,
    BulkTranscriptResponse,
    BulkItemResponse,
)

from app.services.transcript_service import (
    process_single_transcript,
    process_single_transcript_safe,
)

router = APIRouter()


@router.post("/transcript", response_model=TranscriptResponse)
def get_transcript(payload: TranscriptRequest):
    """
    Download transcript for a single YouTube video.
    
    TODO: Add rate limiting
    TODO: Add authentication/API key support
    """
    try:
        result = process_single_transcript(
            url=str(payload.url),
            lang=payload.lang,
            formats=payload.formats
        )
        return TranscriptResponse(**result)
    except HTTPException as e:
        # pass through FastAPI errors
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/bulk", response_model=BulkTranscriptResponse)
def get_bulk_transcripts(payload: BulkTranscriptRequest):
    """
    Download transcripts for multiple YouTube videos.
    
    TODO: Add playlist support
    TODO: Add zip export for bulk downloads
    TODO: Add rate limiting
    """
    results: List[BulkItemResponse] = []

    for url in payload.urls:
        result = process_single_transcript_safe(
            url=str(url),
            lang=payload.lang,
            formats=payload.formats
        )
        results.append(BulkItemResponse(**result))

    return BulkTranscriptResponse(success=True, results=results)
