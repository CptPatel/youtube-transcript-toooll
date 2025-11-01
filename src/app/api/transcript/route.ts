import { NextRequest, NextResponse } from 'next/server';

// TODO: replace mock with real youtube-transcript-api call
// TODO: support ?lang=...
// TODO: bulk endpoint for multiple URLs
// TODO: zip export

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, format = 'txt', lang = 'en' } = body;

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock response data
    const mockData = {
      success: true,
      title: 'Sample YouTube Video - Understanding Aviation',
      availableLanguages: ['en', 'auto', 'es'],
      transcript: [
        { text: 'Welcome to the video.', start: 0.0, duration: 3.2 },
        { text: 'Today we are talking about aviation.', start: 3.2, duration: 4.1 },
        { text: 'Aviation has a rich history dating back to the Wright brothers.', start: 7.3, duration: 5.5 },
        { text: 'Modern aircraft use advanced technology for safety and efficiency.', start: 12.8, duration: 6.2 },
        { text: 'Pilots undergo extensive training to operate these complex machines.', start: 19.0, duration: 5.8 },
        { text: 'Thank you for watching this introduction to aviation.', start: 24.8, duration: 4.5 },
      ],
      cleanText: 'Welcome to the video. Today we are talking about aviation. Aviation has a rich history dating back to the Wright brothers. Modern aircraft use advanced technology for safety and efficiency. Pilots undergo extensive training to operate these complex machines. Thank you for watching this introduction to aviation.',
      downloadUrls: {
        txt: '/mock/sample.txt',
        srt: '/mock/sample.srt',
        vtt: '/mock/sample.vtt',
        json: '/mock/sample.json',
      },
    };

    return NextResponse.json(mockData);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
