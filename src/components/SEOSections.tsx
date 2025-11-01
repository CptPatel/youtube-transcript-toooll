import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function HowToUse() {
  return (
    <section className="space-y-4" itemScope itemType="https://schema.org/HowTo">
      <h2 className="text-2xl font-bold text-gray-900" itemProp="name">How to Use</h2>
      <meta itemProp="description" content="Step-by-step guide to download YouTube transcripts" />
      <ol className="space-y-3 list-decimal list-inside text-gray-700">
        <li itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="text">Copy the YouTube URL from your browser</span>
        </li>
        <li itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="text">Paste it in the input field above</span>
        </li>
        <li itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="text">Choose your preferred format (TXT, SRT, VTT, or JSON)</span>
        </li>
        <li itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="text">Click download and save the transcript</span>
        </li>
      </ol>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Can I download auto-generated subtitles?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, if YouTube provides auto-generated subtitles for the video, you can download them using our tool. Auto-generated captions are available for most videos and work perfectly with our downloader.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Can I download from private videos?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              No, only public and unlisted videos are supported. Private videos require authentication and cannot be accessed by third-party tools.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Do you store my videos or transcripts?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              No, we do not store any videos or transcripts. All processing is done on-demand and nothing is saved on our servers. Your privacy is our priority.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Can I download from a playlist?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, use the Bulk Downloader tab to paste multiple video URLs from a playlist (one per line, up to 50 URLs). This is perfect for downloading transcripts from entire playlists or channels.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">What formats are supported?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              We support TXT (plain text), SRT (SubRip subtitle format), VTT (WebVTT format), and JSON (structured data). Choose the format that best suits your needs.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Is this tool really free?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, completely free. No hidden costs, no subscriptions, no login required. We support the service through non-intrusive ads.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">Can I download transcripts in different languages?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, if the video has transcripts in multiple languages, you can select your preferred language. We support all languages available on YouTube.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <AccordionTrigger itemProp="name">What URL formats are supported?</AccordionTrigger>
          <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              We support all YouTube URL formats: youtube.com/watch?v=, youtu.be/, and youtube.com/shorts/. Just paste any valid YouTube video URL.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export function RelatedTools() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Related Tools & Formats</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a
          href="/youtube-to-txt"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">📄 YouTube to TXT</h3>
          <p className="text-sm text-gray-600 mt-1">Download transcripts as plain text files</p>
        </a>
        <a
          href="/youtube-to-srt"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">🎬 YouTube to SRT</h3>
          <p className="text-sm text-gray-600 mt-1">Get subtitles in SRT format with timestamps</p>
        </a>
        <a
          href="/youtube-to-vtt"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">📹 YouTube to VTT</h3>
          <p className="text-sm text-gray-600 mt-1">Download WebVTT format for HTML5 video</p>
        </a>
        <a
          href="/youtube-to-json"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">💾 YouTube to JSON</h3>
          <p className="text-sm text-gray-600 mt-1">Export structured data for developers</p>
        </a>
        <a
          href="/bulk-youtube-transcript-downloader"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">📦 Bulk Downloader</h3>
          <p className="text-sm text-gray-600 mt-1">Process multiple videos at once</p>
        </a>
        <a
          href="#"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">🎓 For Students</h3>
          <p className="text-sm text-gray-600 mt-1">Perfect for note-taking and studying</p>
        </a>
      </div>
    </section>
  );
}

export function WhyUseTranscripts() {
  return (
    <section className="space-y-4 bg-white rounded-lg p-6 border">
      <h2 className="text-2xl font-bold text-gray-900">Why Download YouTube Transcripts?</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-2">📚 For Students & Educators</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Take notes from educational videos</li>
            <li>Study lecture content offline</li>
            <li>Create study guides from video content</li>
            <li>Search and reference specific parts</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">🎥 For Content Creators</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Repurpose video content into blog posts</li>
            <li>Create subtitles for your videos</li>
            <li>Translate content to other languages</li>
            <li>Improve video SEO with transcripts</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">♿ For Accessibility</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Make content accessible to deaf/hard of hearing</li>
            <li>Read content in noisy environments</li>
            <li>Better comprehension for non-native speakers</li>
            <li>Screen reader compatible text</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">🔬 For Researchers</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Analyze video content at scale</li>
            <li>Extract data for AI/ML training</li>
            <li>Conduct content analysis studies</li>
            <li>Archive video content as text</li>
          </ul>
        </div>
      </div>
    </section>
  );
}