from typing import List, Dict, Any


def seconds_to_vtt_timestamp(seconds: float) -> str:
    """Convert seconds to WebVTT timestamp format (HH:MM:SS.mmm)."""
    millis = int((seconds - int(seconds)) * 1000)
    seconds = int(seconds)
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    return f"{hours:02}:{minutes:02}:{secs:02}.{millis:03}"


def transcript_to_vtt(segments: List[Dict[str, Any]]) -> str:
    """Convert transcript segments to WebVTT subtitle format."""
    lines = ["WEBVTT", ""]
    for seg in segments:
        start = seg["start"]
        duration = seg.get("duration", 0)
        end = start + duration

        start_ts = seconds_to_vtt_timestamp(start)
        end_ts = seconds_to_vtt_timestamp(end)

        text = seg["text"].replace("\n", " ").strip()

        lines.append(f"{start_ts} --> {end_ts}")
        lines.append(text)
        lines.append("")

    return "\n".join(lines)
