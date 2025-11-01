import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SingleVideoTab from '@/components/SingleVideoTab';
import BulkDownloaderTab from '@/components/BulkDownloaderTab';
import AdSlot from '@/components/AdSlot';
import { HowToUse, FAQ, RelatedTools, WhyUseTranscripts } from '@/components/SEOSections';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'YouTube Transcript Downloader',
    description: 'Download YouTube transcripts in TXT, SRT, VTT, or JSON format. Free tool with bulk download support.',
    url: 'https://cff7d8ae-7b8a-413e-bf62-a70280206b85.canvases.tempo.build',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Download YouTube transcripts',
      'Multiple format support (TXT, SRT, VTT, JSON)',
      'Bulk download capability',
      'No login required',
      'Free to use',
      'Multi-language support'
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">🎬 YouTube Transcript Downloader</h1>
            <p className="text-gray-600 mt-2">
              Download YouTube subtitles / transcripts in TXT, SRT, VTT or JSON. <strong>Free. No login. Instant download.</strong>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="space-y-12">
            {/* Tabs Section - Tool Area with Light Background */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <Tabs defaultValue="single" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
                  <TabsTrigger value="single">Single Video</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Downloader</TabsTrigger>
                </TabsList>
                <TabsContent value="single" className="mt-6">
                  <SingleVideoTab />
                </TabsContent>
                <TabsContent value="bulk" className="mt-6">
                  <BulkDownloaderTab />
                </TabsContent>
              </Tabs>
            </section>

            {/* Why Use Section */}
            <WhyUseTranscripts />

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* SEO Sections */}
            <HowToUse />
            
            {/* Divider */}
            <div className="border-t border-gray-200"></div>
            
            <FAQ />
            
            {/* Divider */}
            <div className="border-t border-gray-200"></div>
            
            <RelatedTools />

            {/* In-Content Ad */}
            <section>
              <AdSlot position="in-content" />
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-gray-900">Home</a></li>
                  <li><a href="/youtube-to-txt" className="hover:text-gray-900">YouTube to TXT</a></li>
                  <li><a href="/youtube-to-srt" className="hover:text-gray-900">YouTube to SRT</a></li>
                  <li><a href="/bulk-youtube-transcript-downloader" className="hover:text-gray-900">Bulk Downloader</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
                  <li><a href="#how-to" className="hover:text-gray-900">How to Use</a></li>
                  <li><a href="/blog" className="hover:text-gray-900">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">About</h3>
                <p className="text-sm text-gray-600">
                  Free YouTube transcript downloader supporting TXT, SRT, VTT, and JSON formats. Perfect for students, educators, and content creators.
                </p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-center text-sm text-gray-600">
                © 2024 YouTube Transcript Downloader. All rights reserved. | Made with ❤️ for students, educators & creators
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}