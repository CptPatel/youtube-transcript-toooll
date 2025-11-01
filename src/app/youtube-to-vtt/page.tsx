import type { Metadata } from 'next';
import SingleVideoTab from '@/components/SingleVideoTab';
import { HowToUse, FAQ } from '@/components/SEOSections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube to VTT – Download WebVTT Subtitle File',
  description: 'Convert YouTube transcript into .vtt file with timestamps—compatible with HTML5 video, editors & platforms. Free download.',
  keywords: ['YouTube to VTT', 'WebVTT download', 'YouTube VTT subtitles', 'HTML5 subtitles', 'VTT converter'],
};

export default function YouTubeToVttPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / YouTube to VTT
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">📹 Download YouTube Transcript as VTT</h1>
          <p className="text-gray-600 mt-2">
            Download YouTube transcripts in WebVTT format. Perfect for HTML5 video players and modern web applications.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <SingleVideoTab defaultFormat="vtt" />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What is VTT Format?</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                VTT (Web Video Text Tracks) is the modern subtitle format designed for HTML5 video. It uses HH:MM:SS.mmm timestamps and is ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Web Videos:</strong> Native support in HTML5 &lt;video&gt; elements</li>
                <li><strong>Streaming Platforms:</strong> Used by YouTube, Vimeo, and other platforms</li>
                <li><strong>Modern Editors:</strong> Supported by contemporary video editing software</li>
                <li><strong>Advanced Features:</strong> Supports styling, positioning, and metadata</li>
                <li><strong>Accessibility:</strong> W3C standard for web accessibility</li>
              </ul>
              
              <div className="bg-gray-100 p-4 rounded-lg mt-6 font-mono text-sm">
                <p className="font-sans font-semibold mb-2">Example VTT Format:</p>
                <pre>WEBVTT

00:00:00.000 --&gt; 00:00:03.500
Welcome to this video tutorial

00:00:03.500 --&gt; 00:00:07.200
Today we'll learn about VTT files</pre>
              </div>
            </div>
          </section>

          <section className="space-y-4 bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Why Use VTT Format?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">🌐 Web Developers</h3>
                <p className="text-gray-700">VTT is the native subtitle format for HTML5 video. Add subtitles to your website videos with a simple &lt;track&gt; tag.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📺 Streaming Services</h3>
                <p className="text-gray-700">Most modern streaming platforms prefer VTT for its advanced features and web compatibility.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🎨 Styled Subtitles</h3>
                <p className="text-gray-700">VTT supports CSS styling, allowing you to customize subtitle appearance, position, and formatting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">♿ Accessibility Standard</h3>
                <p className="text-gray-700">VTT is the W3C standard for web video accessibility, ensuring maximum compatibility.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">VTT vs SRT: Which to Choose?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Feature</th>
                    <th className="border border-gray-300 p-3 text-left">VTT</th>
                    <th className="border border-gray-300 p-3 text-left">SRT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">HTML5 Video</td>
                    <td className="border border-gray-300 p-3">✅ Native support</td>
                    <td className="border border-gray-300 p-3">⚠️ Requires conversion</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Video Editors</td>
                    <td className="border border-gray-300 p-3">✅ Modern editors</td>
                    <td className="border border-gray-300 p-3">✅ All editors</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Styling Support</td>
                    <td className="border border-gray-300 p-3">✅ CSS styling</td>
                    <td className="border border-gray-300 p-3">❌ No styling</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Timestamp Format</td>
                    <td className="border border-gray-300 p-3">HH:MM:SS.mmm</td>
                    <td className="border border-gray-300 p-3">HH:MM:SS,mmm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Best For</td>
                    <td className="border border-gray-300 p-3">Web videos, streaming</td>
                    <td className="border border-gray-300 p-3">Video editing, legacy</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              <Link href="/youtube-to-srt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">🎬 YouTube to SRT</h3>
                <p className="text-sm text-gray-600 mt-1">SubRip subtitle format</p>
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
