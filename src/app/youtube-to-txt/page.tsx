import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SingleVideoTab from '@/components/SingleVideoTab';
import { HowToUse, FAQ } from '@/components/SEOSections';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube to TXT – Download Transcript as .txt File',
  description: 'Need a simple text version of a YouTube video? Get the transcript as a .txt file with one click. Free, no login required.',
  keywords: ['YouTube to TXT', 'download YouTube transcript TXT', 'YouTube transcript text file', 'convert YouTube to text'],
};

export default function YouTubeToTxtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / YouTube to TXT
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">📄 YouTube Transcript in TXT Format</h1>
          <p className="text-gray-600 mt-2">
            Download YouTube transcripts as plain text (.txt) files. Perfect for note-taking, studying, and content analysis.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-12">
          {/* Tool Section */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <SingleVideoTab defaultFormat="txt" />
          </section>

          {/* What is TXT Format */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What is TXT Format?</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                TXT (plain text) format is the simplest way to save YouTube transcripts. It contains only the spoken words without timestamps or formatting, making it ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Note-taking:</strong> Copy and paste into your notes app</li>
                <li><strong>Reading:</strong> Easy to read without distractions</li>
                <li><strong>Searching:</strong> Use Ctrl+F to find specific content</li>
                <li><strong>Editing:</strong> Simple to edit in any text editor</li>
                <li><strong>Compatibility:</strong> Opens in any device or application</li>
              </ul>
            </div>
          </section>

          {/* When to Use TXT vs Other Formats */}
          <section className="space-y-4 bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">When to Use TXT vs SRT/VTT</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-700">✅ Use TXT when:</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>You need just the text content</li>
                  <li>Taking notes or studying</li>
                  <li>Creating blog posts from videos</li>
                  <li>Analyzing content without timestamps</li>
                  <li>Maximum compatibility needed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-orange-700">⚠️ Use SRT/VTT when:</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>You need timestamps</li>
                  <li>Creating subtitles for videos</li>
                  <li>Video editing projects</li>
                  <li>Syncing text with video playback</li>
                  <li>Professional subtitle work</li>
                </ul>
              </div>
            </div>
          </section>

          <HowToUse />
          
          <div className="border-t border-gray-200"></div>
          
          <FAQ />

          {/* Related Formats */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Other Formats</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/youtube-to-srt" className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md">
                <h3 className="font-semibold text-gray-900">🎬 YouTube to SRT</h3>
                <p className="text-sm text-gray-600 mt-1">With timestamps for subtitles</p>
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
