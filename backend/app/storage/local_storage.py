import os
import json
from typing import Any


def save_text_file(base_dir: str, filename: str, content: str) -> None:
    """Save text content to a file."""
    os.makedirs(base_dir, exist_ok=True)
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)


def save_json_file(base_dir: str, filename: str, data: Any) -> None:
    """Save data as JSON to a file."""
    os.makedirs(base_dir, exist_ok=True)
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
