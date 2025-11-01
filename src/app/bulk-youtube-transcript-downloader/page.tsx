import type { Metadata } from 'next';
import BulkDownloaderTab from '@/components/BulkDownloaderTab';
import { FAQ } from '@/components/SEOSections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bulk YouTube Transcript Downloader – Export Many At Once',
  description: 'Save time: paste multiple YouTube URLs and download all transcripts in one go. Ideal for playlists, channels, researchers. Free bulk download.',
  keywords: ['bulk YouTube transcript download', 'YouTube playlist transcript', 'download multiple transcripts', 'batch YouTube downloader'],
};

export default function BulkDownloaderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / Bulk Downloader
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">📦 Bulk YouTube Transcript Downloader</h1>
          <p className="text-gray-600 mt-2">
            Download transcripts from multiple YouTube videos at once. Perfect for playlists, channels, and research projects.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <BulkDownloaderTab />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Why Bulk Download Matters</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                Processing videos one-by-one is time-consuming. Our bulk downloader lets you download transcripts from up to 50 videos simultaneously:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Save Time:</strong> Process entire playlists in minutes, not hours</li>
                <li><strong>Research Projects:</strong> Analyze content from multiple videos at scale</li>
                <li><strong>Content Creation:</strong> Repurpose multiple videos into blog posts or articles</li>
                <li><strong>Educational Use:</strong> Download lecture series or course materials</li>
                <li><strong>Archiving:</strong> Backup transcripts from entire channels</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 bg-orange-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Supported Use-Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">📚 Playlists</h3>
                <p className="text-gray-700">Download transcripts from entire YouTube playlists. Perfect for course materials, tutorial series, or educational content.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📺 Channels</h3>
                <p className="text-gray-700">Extract transcripts from multiple videos on a channel. Great for content analysis or competitive research.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🔬 Research</h3>
                <p className="text-gray-700">Gather data from multiple sources for academic research, sentiment analysis, or content studies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📝 Content Repurposing</h3>
                <p className="text-gray-700">Convert multiple videos into written content for blogs, articles, or social media posts.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">How to Get Started</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <strong>Collect Your URLs</strong>
                  <p className="text-sm mt-1">Copy YouTube video URLs from a playlist, channel, or your saved list. Each URL should be on a new line.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <strong>Paste URLs</strong>
                  <p className="text-sm mt-1">Paste all URLs into the text area above (up to 50 URLs). One URL per line.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <strong>Select Formats</strong>
                  <p className="text-sm mt-1">Choose which formats you need: TXT, SRT, VTT, or JSON. You can select multiple formats.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <strong>Download All</strong>
                  <p className="text-sm mt-1">Click "Download All Transcripts" and wait for processing. Failed videos won't stop the batch.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="space-y-4 bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="font-semibold text-lg">💡 Pro Tips</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Start with a smaller batch (5-10 videos) to test</li>
              <li>If a video fails, it won't affect the others</li>
              <li>Use JSON format for programmatic processing</li>
              <li>Consider downloading TXT for quick reading and SRT for video editing</li>
              <li>For very large batches, split into multiple requests</li>
            </ul>
          </section>

          <div className="border-t border-gray-200"></div>
          
          <FAQ />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Single Video Tools</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/youtube-to-txt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📄 TXT</h3>
                <p className="text-sm text-gray-600 mt-1">Plain text</p>
              </Link>
              <Link href="/youtube-to-srt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">🎬 SRT</h3>
                <p className="text-sm text-gray-600 mt-1">Subtitles</p>
              </Link>
              <Link href="/youtube-to-vtt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">📹 VTT</h3>
                <p className="text-sm text-gray-600 mt-1">WebVTT</p>
              </Link>
              <Link href="/youtube-to-json" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">💾 JSON</h3>
                <p className="text-sm text-gray-600 mt-1">Structured data</p>
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
