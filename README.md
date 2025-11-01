# 🎬 YouTube Transcript Downloader

> Because sometimes you just need the words, not the whole video. 📝

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.1.0-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

A sleek, modern web app that lets you download YouTube transcripts in multiple formats. No login required. No BS. Just transcripts. 🚀

![YouTube Transcript Downloader Demo](https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80)

---

## ✨ Features

### 🎯 Core Functionality
- **Single Video Download** - Paste a YouTube URL, get your transcript instantly
- **Bulk Download** - Process multiple videos at once (because who has time for one at a time?)
- **Multiple Formats** - TXT, SRT, VTT, JSON - we got 'em all
- **Language Support** - Auto-detect or choose your preferred language
- **Smart Fallbacks** - If your language isn't available, we'll find the next best thing

### 🎨 User Experience
- **Clean, Modern UI** - Built with Next.js 14 and Tailwind CSS
- **Dark Mode Ready** - Easy on the eyes, day or night 🌙
- **Responsive Design** - Works on desktop, tablet, and mobile
- **No Login Required** - Because ain't nobody got time for that
- **Free Forever** - Seriously. No hidden costs.

### 🔧 Technical Highlights
- **Real-time Processing** - Powered by `youtube-transcript-api`
- **RESTful API** - Clean, documented FastAPI backend
- **Type-Safe** - TypeScript frontend, Pydantic backend
- **CORS Enabled** - Ready for cross-origin requests
- **Error Handling** - Graceful failures with helpful messages

---

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:
- **Node.js** 18+ (for the frontend)
- **Python** 3.11+ (for the backend)
- **npm** or **yarn** (your choice, we don't judge)

### 🎨 Frontend Setup

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
# 🎉 You're in!
```

### 🐍 Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment (because we're civilized)
python -m venv .venv

# Activate it
source .venv/bin/activate  # Mac/Linux
# or
.venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run the server
python -m app.main

# Backend is now running at http://localhost:8000
# Visit http://localhost:8000/docs for interactive API docs 📚
```

---

## 📁 Project Structure

```
youtube-transcript-downloader/
├── 🎨 Frontend (Next.js)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # Main landing page
│   │   │   └── globals.css        # Global styles
│   │   ├── components/
│   │   │   ├── SingleVideoTab.tsx # Single video downloader
│   │   │   ├── BulkDownloaderTab.tsx # Bulk downloader
│   │   │   ├── TranscriptResultCard.tsx # Results display
│   │   │   ├── SEOSections.tsx    # How-to, FAQ, etc.
│   │   │   └── ui/                # Shadcn UI components
│   │   └── lib/
│   │       └── utils.ts           # Utility functions
│   ├── package.json
│   └── tailwind.config.ts
│
└── 🐍 Backend (FastAPI)
    ├── app/
    │   ├── main.py                # FastAPI app entry point
    │   ├── api/
    │   │   ├── routes.py          # API endpoints
    │   │   └── models.py          # Pydantic models
    │   ├── services/
    │   │   └── transcript_service.py # Core logic
    │   ├── exporters/
    │   │   ├── txt_exporter.py    # Plain text export
    │   │   ├── srt_exporter.py    # SRT subtitles
    │   │   └── vtt_exporter.py    # WebVTT subtitles
    │   └── storage/
    │       └── local_storage.py   # File storage
    ├── exports/                   # Generated files
    └── requirements.txt
```

---

## 🎯 API Documentation

### 📍 Endpoints

#### 1️⃣ Single Transcript Download

**POST** `/api/transcript`

Download a transcript for a single YouTube video.

**Request:**
```json
{
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "lang": "en",
  "formats": ["txt", "srt", "vtt", "json"]
}
```

**Response:**
```json
{
  "success": true,
  "video_id": "dQw4w9WgXcQ",
  "source_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "language_used": "en",
  "available_languages": ["en", "es", "fr", "de"],
  "transcript_preview": "Never gonna give you up, never gonna let you down...",
  "download_urls": {
    "txt": "/files/dQw4w9WgXcQ/transcript.txt",
    "srt": "/files/dQw4w9WgXcQ/transcript.srt",
    "vtt": "/files/dQw4w9WgXcQ/transcript.vtt",
    "json": "/files/dQw4w9WgXcQ/transcript.json"
  }
}
```

#### 2️⃣ Bulk Transcript Download

**POST** `/api/bulk`

Download transcripts for multiple videos at once.

**Request:**
```json
{
  "urls": [
    "https://www.youtube.com/watch?v=VIDEO1",
    "https://youtu.be/VIDEO2",
    "https://www.youtube.com/shorts/VIDEO3"
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
      "download_urls": { "txt": "...", "srt": "..." }
    },
    {
      "url": "https://youtu.be/VIDEO2",
      "video_id": "VIDEO2",
      "success": false,
      "error": "Transcript not available for this video"
    }
  ]
}
```

### 🔗 Supported URL Formats

We support all the YouTube URL formats you can throw at us:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID`
- `https://www.youtube.com/watch?v=VIDEO_ID&t=123s` (with timestamps)

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety FTW
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible primitives
- **[Lucide Icons](https://lucide.dev/)** - Clean, consistent icons

### Backend
- **[FastAPI](https://fastapi.tiangolo.com/)** - Modern Python web framework
- **[Pydantic](https://docs.pydantic.dev/)** - Data validation
- **[youtube-transcript-api](https://github.com/jdepoix/youtube-transcript-api)** - The magic behind the curtain
- **[Uvicorn](https://www.uvicorn.org/)** - Lightning-fast ASGI server

---

## 🎨 Screenshots

### Main Interface
![Main Interface](https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80)

### Bulk Download
![Bulk Download](https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80)

### Results Display
![Results](https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80)

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repo** 🍴
2. **Create a branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** ✨
4. **Commit** (`git commit -m 'Add some amazing feature'`)
5. **Push** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request** 🎉

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests if applicable
- Update documentation as needed
- Be nice to other contributors 💙

---

## 🐛 Known Issues & Limitations

- **Rate Limiting**: YouTube may rate-limit requests. We're working on caching.
- **Private Videos**: Can't download transcripts from private videos (obviously)
- **Auto-Generated Captions**: Quality depends on YouTube's auto-captioning
- **Large Playlists**: Bulk downloads are limited to prevent abuse

---

## 🗺️ Roadmap

### Coming Soon™
- [ ] 📦 Playlist support
- [ ] 🗜️ Zip export for bulk downloads
- [ ] 🔐 API authentication
- [ ] ⚡ Redis caching
- [ ] 🌍 More language support
- [ ] 🎨 Custom styling options
- [ ] 📊 Download statistics
- [ ] 🔔 Webhook notifications
- [ ] ☁️ Cloud storage integration (S3/Supabase)
- [ ] 🤖 Auto-translation support

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[youtube-transcript-api](https://github.com/jdepoix/youtube-transcript-api)** - For making this possible
- **[Shadcn](https://twitter.com/shadcn)** - For the amazing UI components
- **[Vercel](https://vercel.com/)** - For Next.js and hosting
- **Coffee** ☕ - For keeping us awake during development

---

## 💬 Support

Got questions? Found a bug? Want to chat?

- 🐛 [Open an issue](https://github.com/yourusername/youtube-transcript-downloader/issues)
- 💬 [Start a discussion](https://github.com/yourusername/youtube-transcript-downloader/discussions)
- 📧 Email: your.email@example.com
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

## ⭐ Star History

If you find this project useful, give it a star! It helps others discover it too. 🌟

---

<div align="center">

**Made with ❤️ and way too much coffee**

[⬆ Back to Top](#-youtube-transcript-downloader)

</div>
