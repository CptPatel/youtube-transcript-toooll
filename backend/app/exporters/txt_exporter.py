from typing import List, Dict, Any


def transcript_to_txt(segments: List[Dict[str, Any]]) -> str:
    """Convert transcript segments to plain text format."""
    # simple join with newlines
    lines = [seg["text"].strip() for seg in segments if seg.get("text")]
    return "\n".join(lines)
