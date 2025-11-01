import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cff7d8ae-7b8a-413e-bf62-a70280206b85.canvases.tempo.build'),
  title: {
    default: 'YouTube Transcript Downloader – Free, No Login Required',
    template: '%s | YouTube Transcript Downloader'
  },
  description: 'Download YouTube transcripts in TXT, SRT, VTT, or JSON format. Free tool with bulk download support. No login required. Perfect for students, educators, and content creators.',
  keywords: [
    'download YouTube transcript',
    'YouTube transcript downloader free',
    'YouTube subtitles downloader',
    'bulk YouTube transcript download',
    'download YouTube transcript TXT format',
    'download YouTube transcript SRT format',
    'YouTube to SRT converter',
    'YouTube transcript tool',
    'free YouTube transcript extractor'
  ],
  authors: [{ name: 'YouTube Transcript Downloader' }],
  creator: 'YouTube Transcript Downloader',
  publisher: 'YouTube Transcript Downloader',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cff7d8ae-7b8a-413e-bf62-a70280206b85.canvases.tempo.build',
    title: 'YouTube Transcript Downloader – Free, No Login Required',
    description: 'Download YouTube transcripts in TXT, SRT, VTT, or JSON format. Free tool with bulk download support.',
    siteName: 'YouTube Transcript Downloader',
    images: [{
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      width: 1200,
      height: 630,
      alt: 'YouTube Transcript Downloader'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Transcript Downloader – Free, No Login Required',
    description: 'Download YouTube transcripts in TXT, SRT, VTT, or JSON format. Free tool with bulk download support.',
    images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cff7d8ae-7b8a-413e-bf62-a70280206b85.canvases.tempo.build" />
      </head>
      <body>{children}</body>
    </html>
  );
}
