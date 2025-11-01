# YouTube Transcript Downloader Backend

FastAPI backend for downloading YouTube transcripts in multiple formats (TXT, SRT, VTT, JSON).

## Features

- Download transcripts from YouTube videos
- Support for multiple URL formats (youtube.com/watch, youtu.be, youtube.com/shorts)
- Multiple export formats: TXT, SRT, VTT, JSON
- Bulk download support
- Language selection with fallback
- CORS enabled for frontend integration

## Setup

### 1. Create Virtual Environment

```bash
cd backend
python -m venv .venv

# On macOS/Linux:
source .venv/bin/activate

# On Windows:
.venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Server

```bash
# Option 1: Using the main script
python -m app.main

# Option 2: Using uvicorn directly
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

The server will start at `http://localhost:8000`

## API Endpoints

### 1. Single Transcript Download

**POST** `/api/transcript`

**Request Body:**
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "lang": "en",
  "formats": ["txt", "srt", "vtt", "json"]
}
```

**Response:**
```json
{
  "success": true,
  "video_id": "VIDEO_ID",
  "source_url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "language_used": "en",
  "available_languages": ["en", "es", "fr"],
  "transcript_preview": "First 300 characters...",
  "download_urls": {
    "txt": "/files/VIDEO_ID/transcript.txt",
    "srt": "/files/VIDEO_ID/transcript.srt",
    "vtt": "/files/VIDEO_ID/transcript.vtt",
    "json": "/files/VIDEO_ID/transcript.json"
  }
}
```

### 2. Bulk Transcript Download

**POST** `/api/bulk`

**Request Body:**
```json
{
  "urls": [
    "https://www.youtube.com/watch?v=VIDEO1",
    "https://youtu.be/VIDEO2"
  ],
  "lang": "en",
  "formats": ["txt", "srt"]
}
```

**Response:**
```json
{
  "success": true,
  "results": [
    {
      "url": "https://www.youtube.com/watch?v=VIDEO1",
      "video_id": "VIDEO1",
      "success": true,
      "download_urls": { ... }
    },
    {
      "url": "https://youtu.be/VIDEO2",
      "video_id": "VIDEO2",
      "success": false,
      "error": "Transcript not available"
    }
  ]
}
```

### 3. Download Files

Files are served from `/files/{video_id}/{filename}`

Example: `http://localhost:8000/files/dQw4w9WgXcQ/transcript.txt`

## Testing

### Using curl:

```bash
curl -X POST http://localhost:8000/api/transcript \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","formats":["txt","srt"]}'
```

### Using the API docs:

Visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI)

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app & server config
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes.py        # API endpoints
│   │   └── models.py        # Pydantic models
│   ├── services/
│   │   ├── __init__.py
│   │   └── transcript_service.py  # Core transcript logic
│   ├── exporters/
│   │   ├── __init__.py
│   │   ├── txt_exporter.py  # Plain text export
│   │   ├── srt_exporter.py  # SRT subtitle format
│   │   └── vtt_exporter.py  # WebVTT subtitle format
│   └── storage/
│       ├── __init__.py
│       └── local_storage.py # File system storage
├── exports/                 # Generated files (auto-created)
└── requirements.txt
```

## TODO / Future Improvements

- [ ] Add playlist support
- [ ] Add zip export for bulk downloads
- [ ] Implement rate limiting
- [ ] Add authentication/API key support
- [ ] Move storage to S3/Supabase for production
- [ ] Add Redis caching for frequently requested videos
- [ ] Implement webhook notifications for bulk processing
- [ ] Add support for more languages and auto-translation

## Integration with Frontend

Update your Next.js frontend API calls to point to:

```typescript
const API_BASE_URL = "http://localhost:8000";

// Single transcript
const response = await fetch(`${API_BASE_URL}/api/transcript`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: videoUrl,
    lang: selectedLang,
    formats: ['txt', 'srt', 'vtt', 'json']
  })
});

// Bulk transcripts
const response = await fetch(`${API_BASE_URL}/api/bulk`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    urls: videoUrls,
    lang: selectedLang,
    formats: ['txt', 'srt']
  })
});
```

## Notes

- CORS is currently set to allow all origins (`*`) for development. Lock this down for production.
- Files are stored locally in the `exports/` directory. Consider cloud storage (S3/Supabase) for production.
- The youtube-transcript-api library requires internet access to fetch transcripts from YouTube.

## License

See parent project license.
