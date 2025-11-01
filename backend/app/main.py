from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from app.api.routes import router as api_router

app = FastAPI(
    title="YouTube Transcript Downloader API",
    version="0.1.0",
    description="Backend for downloading YouTube transcripts in multiple formats."
)

# CORS (open for now; lock later)
# TODO: Lock down CORS origins for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API routes
app.include_router(api_router, prefix="/api")

# Ensure exports directory exists
os.makedirs("exports", exist_ok=True)

# static files for downloads
app.mount("/files", StaticFiles(directory="exports"), name="files")


@app.get("/")
def root():
    return {"status": "ok", "message": "YouTube Transcript Downloader API"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
