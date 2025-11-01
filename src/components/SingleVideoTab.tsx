'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Search } from 'lucide-react';
import TranscriptResultCard from './TranscriptResultCard';
import AdSlot from './AdSlot';

interface TranscriptData {
  title: string;
  availableLanguages: string[];
  transcript: Array<{ text: string; start: number; duration: number }>;
  cleanText: string;
  downloadUrls: {
    txt: string;
    srt: string;
    vtt: string;
    json: string;
  };
}

export default function SingleVideoTab() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null);

  const handleFetch = async () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    setLoading(true);
    setError(null);
    setTranscriptData(null);

    try {
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, format: 'txt', lang: 'en' }),
      });

      const data = await response.json();

      if (data.success) {
        setTranscriptData(data);
      } else {
        setError('Transcript not available for this video.');
      }
    } catch (err) {
      setError('Failed to fetch transcript. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Centered Input Area on Desktop */}
      <div className={`space-y-4 ${!transcriptData ? 'md:py-12' : ''}`}>
        <div className="flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto">
          <Input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
            className="flex-1 h-11"
          />
          <Button onClick={handleFetch} disabled={loading} className="px-6 h-11">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Fetch Transcript
              </>
            )}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="max-w-3xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      {transcriptData && (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TranscriptResultCard data={transcriptData} />
          </div>
          <div className="lg:col-span-1">
            <AdSlot position="top-right" />
          </div>
        </div>
      )}
    </div>
  );
}