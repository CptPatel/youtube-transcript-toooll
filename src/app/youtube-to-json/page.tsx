import type { Metadata } from 'next';
import SingleVideoTab from '@/components/SingleVideoTab';
import { HowToUse, FAQ } from '@/components/SEOSections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube Transcript JSON Export – Developers & Researchers',
  description: 'Export YouTube video transcripts as JSON—ready for developers, AI datasets, text analysis. Free structured data export.',
  keywords: ['YouTube to JSON', 'YouTube transcript JSON', 'YouTube API alternative', 'transcript data export', 'AI training data'],
};

export default function YouTubeToJsonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / YouTube to JSON
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">💾 YouTube Transcript Export as JSON</h1>
          <p className="text-gray-600 mt-2">
            Export YouTube transcripts as structured JSON data. Perfect for developers, researchers, and AI/ML projects.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <SingleVideoTab defaultFormat="json" />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">JSON Format Details</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                JSON (JavaScript Object Notation) provides structured, machine-readable transcript data with timestamps and metadata. Perfect for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Developers:</strong> Easy to parse and integrate into applications</li>
                <li><strong>AI/ML Training:</strong> Clean data for training language models</li>
                <li><strong>Data Analysis:</strong> Analyze video content programmatically</li>
                <li><strong>Research:</strong> Extract insights from large video datasets</li>
                <li><strong>Automation:</strong> Build tools that process video transcripts</li>
              </ul>
              
              <div className="bg-gray-100 p-4 rounded-lg mt-6 font-mono text-sm overflow-x-auto">
                <p className="font-sans font-semibold mb-2">Example JSON Structure:</p>
                <pre>{`[
  {
    "text": "Welcome to this video tutorial",
    "start": 0.0,
    "duration": 3.5
  },
  {
    "text": "Today we'll learn about JSON",
    "start": 3.5,
    "duration": 3.7
  }
]`}</pre>
              </div>
            </div>
          </section>

          <section className="space-y-4 bg-indigo-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Use-Cases for JSON Export</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">👨‍💻 Software Developers</h3>
                <p className="text-gray-700 mb-2">Build applications that:</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Search video content by keywords</li>
                  <li>Generate video summaries automatically</li>
                  <li>Create interactive transcripts</li>
                  <li>Build video search engines</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🤖 AI/ML Engineers</h3>
                <p className="text-gray-700 mb-2">Use transcript data for:</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Training language models</li>
                  <li>Sentiment analysis</li>
                  <li>Topic modeling</li>
                  <li>Speech pattern analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🔬 Researchers</h3>
                <p className="text-gray-700 mb-2">Analyze video content:</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Content analysis at scale</li>
                  <li>Linguistic research</li>
                  <li>Media studies</li>
                  <li>Social science research</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📊 Data Analysts</h3>
                <p className="text-gray-700 mb-2">Extract insights from:</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Video content trends</li>
                  <li>Speaker patterns</li>
                  <li>Topic frequency</li>
                  <li>Engagement metrics</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">How to Use JSON Transcripts</h2>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">🐍 Python Example</h3>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto"><code>{`import json

# Load transcript
with open('transcript.json', 'r') as f:
    transcript = json.load(f)

# Extract all text
full_text = ' '.join([seg['text'] for seg in transcript])

# Find segments containing keyword
keyword_segments = [
    seg for seg in transcript 
    if 'keyword' in seg['text'].lower()
]`}</code></pre>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">🟨 JavaScript Example</h3>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto"><code>{`// Load transcript
const transcript = await fetch('transcript.json')
  .then(res => res.json());

// Get text at specific time
function getTextAtTime(seconds) {
  return transcript.find(seg => 
    seg.start <= seconds && 
    seg.start + seg.duration >= seconds
  );
}

// Search transcript
const results = transcript.filter(seg =>
  seg.text.toLowerCase().includes('search term')
);`}</code></pre>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200"></div>
          
          <FAQ />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Other Formats</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/youtube-to-txt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📄 YouTube to TXT</h3>
                <p className="text-sm text-gray-600 mt-1">Plain text for reading</p>
              </Link>
              <Link href="/youtube-to-srt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">🎬 YouTube to SRT</h3>
                <p className="text-sm text-gray-600 mt-1">Subtitles for video editing</p>
              </Link>
              <Link href="/youtube-to-vtt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📹 YouTube to VTT</h3>
                <p className="text-sm text-gray-600 mt-1">WebVTT for web videos</p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t bg-white mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 YouTube Transcript Downloader. <Link href="/" className="hover:text-gray-900">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
