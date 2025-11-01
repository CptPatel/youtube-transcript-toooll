import type { Metadata } from 'next';
import SingleVideoTab from '@/components/SingleVideoTab';
import { HowToUse, FAQ } from '@/components/SEOSections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube to SRT – Download Subtitle File (.srt)',
  description: 'Get YouTube transcripts with timestamps in .srt format—perfect for video editing & subtitles. Free download, no login required.',
  keywords: ['YouTube to SRT', 'download YouTube SRT', 'YouTube subtitle file', 'SRT converter', 'YouTube subtitles download'],
};

export default function YouTubeToSrtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / YouTube to SRT
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">🎬 Download YouTube Transcript as SRT</h1>
          <p className="text-gray-600 mt-2">
            Download YouTube transcripts in SRT (SubRip) format with timestamps. Perfect for video editing and subtitle creation.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <SingleVideoTab defaultFormat="srt" />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What is SRT Format?</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                SRT (SubRip Subtitle) is the most popular subtitle format. It includes timestamps in HH:MM:SS,mmm format, making it perfect for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Video Editing:</strong> Import into Premiere Pro, Final Cut, DaVinci Resolve</li>
                <li><strong>Subtitle Creation:</strong> Add subtitles to your own videos</li>
                <li><strong>Translation:</strong> Translate subtitles while keeping timing</li>
                <li><strong>Accessibility:</strong> Make videos accessible with accurate captions</li>
                <li><strong>Universal Compatibility:</strong> Supported by almost all video players</li>
              </ul>
              
              <div className="bg-gray-100 p-4 rounded-lg mt-6 font-mono text-sm">
                <p className="font-sans font-semibold mb-2">Example SRT Format:</p>
                <pre>1
00:00:00,000 --&gt; 00:00:03,500
Welcome to this video tutorial

2
00:00:03,500 --&gt; 00:00:07,200
Today we'll learn about SRT files</pre>
              </div>
            </div>
          </section>

          <section className="space-y-4 bg-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Use-Cases for SRT Format</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">🎥 Video Editors</h3>
                <p className="text-gray-700">Import SRT files directly into your video editing software to add professional subtitles with perfect timing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🌍 Translators</h3>
                <p className="text-gray-700">Translate YouTube content while maintaining original timestamps for accurate subtitle synchronization.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📱 Content Creators</h3>
                <p className="text-gray-700">Repurpose YouTube content by adding subtitles to your own videos or social media posts.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">♿ Accessibility</h3>
                <p className="text-gray-700">Make video content accessible by providing accurate, timed captions for deaf and hard-of-hearing viewers.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">How to Download YouTube Transcripts as SRT</h2>
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              <li>Copy the YouTube video URL from your browser</li>
              <li>Paste it in the input field above</li>
              <li>Select <strong>SRT</strong> as your format</li>
              <li>Click "Download Transcript"</li>
              <li>Save the .srt file to your computer</li>
              <li>Import into your video editor or player</li>
            </ol>
          </section>

          <div className="border-t border-gray-200"></div>
          
          <FAQ />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Other Formats</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/youtube-to-txt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📄 YouTube to TXT</h3>
                <p className="text-sm text-gray-600 mt-1">Plain text without timestamps</p>
              </Link>
              <Link href="/youtube-to-vtt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📹 YouTube to VTT</h3>
                <p className="text-sm text-gray-600 mt-1">WebVTT for HTML5 video</p>
              </Link>
              <Link href="/youtube-to-json" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">💾 YouTube to JSON</h3>
                <p className="text-sm text-gray-600 mt-1">Structured data format</p>
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
