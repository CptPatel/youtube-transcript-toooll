import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function HowToUse() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">How to Use</h2>
      <ol className="space-y-3 list-decimal list-inside text-gray-700">
        <li>Copy the YouTube URL from your browser</li>
        <li>Paste it in the input field above</li>
        <li>Choose your preferred format (TXT, SRT, VTT, or JSON)</li>
        <li>Click download and save the transcript</li>
      </ol>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I download auto-generated subtitles?</AccordionTrigger>
          <AccordionContent>
            Yes, if YouTube provides auto-generated subtitles for the video, you can download them using our tool.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I download from private videos?</AccordionTrigger>
          <AccordionContent>
            No, only public and unlisted videos are supported. Private videos require authentication and cannot be accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you store my videos?</AccordionTrigger>
          <AccordionContent>
            No, we do not store any videos or transcripts. All processing is done on-demand and nothing is saved on our servers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I download from a playlist?</AccordionTrigger>
          <AccordionContent>
            Yes, use the Bulk Downloader tab to paste multiple video URLs from a playlist (one per line, up to 50 URLs).
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export function RelatedTools() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Related Tools</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a
          href="#"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white"
        >
          <h3 className="font-semibold text-gray-900">YouTube to TXT</h3>
          <p className="text-sm text-gray-600 mt-1">Download transcripts as plain text</p>
        </a>
        <a
          href="#"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white"
        >
          <h3 className="font-semibold text-gray-900">YouTube to SRT</h3>
          <p className="text-sm text-gray-600 mt-1">Get subtitles in SRT format</p>
        </a>
        <a
          href="#"
          className="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-white"
        >
          <h3 className="font-semibold text-gray-900">Bulk Transcript Downloader</h3>
          <p className="text-sm text-gray-600 mt-1">Process multiple videos at once</p>
        </a>
      </div>
    </section>
  );
}
