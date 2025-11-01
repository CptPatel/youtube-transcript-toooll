'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, CheckCircle2, XCircle, Archive, Play } from 'lucide-react';

interface BulkResult {
  url: string;
  status: 'pending' | 'fetching' | 'success' | 'failed';
  title?: string;
  error?: string;
}

export default function BulkDownloaderTab() {
  const [urls, setUrls] = useState('');
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<BulkResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async () => {
    const urlList = urls
      .split('\n')
      .map((u) => u.trim())
      .filter((u) => u.length > 0);

    if (urlList.length === 0) {
      setError('Please enter at least one YouTube URL');
      return;
    }

    if (urlList.length > 50) {
      setError('Maximum 50 URLs allowed');
      return;
    }

    setError(null);
    setProcessing(true);

    // Initialize results
    const initialResults: BulkResult[] = urlList.map((url) => ({
      url,
      status: 'pending',
    }));
    setResults(initialResults);

    // Process each URL
    for (let i = 0; i < urlList.length; i++) {
      setResults((prev) =>
        prev.map((r, idx) =>
          idx === i ? { ...r, status: 'fetching' } : r
        )
      );

      try {
        const response = await fetch('/api/transcript', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: urlList[i], format: 'txt', lang: 'en' }),
        });

        const data = await response.json();

        if (data.success) {
          setResults((prev) =>
            prev.map((r, idx) =>
              idx === i
                ? { ...r, status: 'success', title: data.title }
                : r
            )
          );
        } else {
          setResults((prev) =>
            prev.map((r, idx) =>
              idx === i
                ? { ...r, status: 'failed', error: 'Transcript not available' }
                : r
            )
          );
        }
      } catch (err) {
        setResults((prev) =>
          prev.map((r, idx) =>
            idx === i
              ? { ...r, status: 'failed', error: 'Failed to fetch' }
              : r
          )
        );
      }
    }

    setProcessing(false);
  };

  const handleDownload = (format: string, index: number) => {
    // TODO: Implement actual download logic
    console.log(`Downloading ${format} for result ${index}`);
    alert(`Download ${format.toUpperCase()} - This will be implemented with real backend`);
  };

  const handleDownloadAll = () => {
    // TODO: Implement ZIP download
    alert('Download all as ZIP - This will be implemented with real backend');
  };

  const successCount = results.filter((r) => r.status === 'success').length;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Textarea
          placeholder="Paste YouTube URLs here (one per line, max 50)&#10;https://www.youtube.com/watch?v=...&#10;https://www.youtube.com/watch?v=..."
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          rows={8}
          className="font-mono text-sm"
        />

        <div className="flex items-center gap-4 flex-wrap">
          <Button onClick={handleProcess} disabled={processing} className="px-6">
            {processing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Process All
              </>
            )}
          </Button>

          {successCount > 0 && (
            <Button onClick={handleDownloadAll} variant="outline" className="px-6">
              <Archive className="w-4 h-4 mr-2" />
              Download All as ZIP
            </Button>
          )}
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      {results.length > 0 && (
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Video URL</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-48">Downloads</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow 
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="max-w-xs truncate text-sm">
                      {result.title || result.url}
                    </TableCell>
                    <TableCell>
                      {result.status === 'pending' && (
                        <Badge variant="secondary">Pending</Badge>
                      )}
                      {result.status === 'fetching' && (
                        <Badge variant="secondary">
                          <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                          Fetching
                        </Badge>
                      )}
                      {result.status === 'success' && (
                        <Badge className="bg-green-500">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Success
                        </Badge>
                      )}
                      {result.status === 'failed' && (
                        <Badge variant="destructive">
                          <XCircle className="w-3 h-3 mr-1" />
                          Failed
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {result.status === 'success' && (
                        <div className="flex gap-1 flex-wrap">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownload('txt', index)}
                            className="h-7 px-2 text-xs"
                          >
                            TXT
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownload('srt', index)}
                            className="h-7 px-2 text-xs"
                          >
                            SRT
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownload('vtt', index)}
                            className="h-7 px-2 text-xs"
                          >
                            VTT
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownload('json', index)}
                            className="h-7 px-2 text-xs"
                          >
                            JSON
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}