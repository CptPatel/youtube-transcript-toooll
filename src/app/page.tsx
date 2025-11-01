import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SingleVideoTab from '@/components/SingleVideoTab';
import BulkDownloaderTab from '@/components/BulkDownloaderTab';
import AdSlot from '@/components/AdSlot';
import { HowToUse, FAQ, RelatedTools } from '@/components/SEOSections';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">YouTube Transcript Downloader</h1>
          <p className="text-gray-600 mt-2">
            Download YouTube subtitles / transcripts in TXT, SRT, VTT or JSON. Free. No login.
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
          <p className="text-center text-sm text-gray-600">
            © 2024 YouTube Transcript Downloader. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}