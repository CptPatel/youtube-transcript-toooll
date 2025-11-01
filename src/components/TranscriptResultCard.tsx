'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface TranscriptSegment {
  text: string;
  start: number;
  duration: number;
}

interface TranscriptData {
  title: string;
  availableLanguages: string[];
  transcript: TranscriptSegment[];
  cleanText: string;
  downloadUrls: {
    txt: string;
    srt: string;
    vtt: string;
    json: string;
  };
}

interface TranscriptResultCardProps {
  data: TranscriptData;
}

export default function TranscriptResultCard({ data }: TranscriptResultCardProps) {
  const [selectedLang, setSelectedLang] = useState(data.availableLanguages[0]);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleDownload = (format: 'txt' | 'srt' | 'vtt' | 'json') => {
    // TODO: Implement actual download logic
    console.log(`Downloading ${format} format in ${selectedLang} language`);
    alert(`Download ${format.toUpperCase()} - This will be implemented with real backend`);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.cleanText);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Transcript copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const languageLabels: Record<string, string> = {
    en: 'English',
    auto: 'Auto-Generated',
    es: 'Spanish',
  };

  return (
    <Card className="p-6 bg-white shadow-sm border border-gray-200">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          </div>
          <Select value={selectedLang} onValueChange={setSelectedLang}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {data.availableLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {languageLabels[lang] || lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <div className="border rounded-lg p-4 bg-gray-50 max-h-[250px] overflow-y-auto">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.cleanText}</p>
          </div>
          <Button
            onClick={handleCopy}
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 h-8 px-3"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => handleDownload('txt')}
            size="sm"
            className="rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            TXT
          </Button>
          <Button
            onClick={() => handleDownload('srt')}
            size="sm"
            className="rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            SRT
          </Button>
          <Button
            onClick={() => handleDownload('vtt')}
            size="sm"
            className="rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            VTT
          </Button>
          <Button
            onClick={() => handleDownload('json')}
            size="sm"
            className="rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            JSON
          </Button>
        </div>
      </div>
    </Card>
  );
}