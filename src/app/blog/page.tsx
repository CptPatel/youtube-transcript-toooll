import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog – YouTube Transcript Tips & Guides',
  description: 'Learn how to download, use, and optimize YouTube transcripts. Tips for students, educators, content creators, and researchers.',
};

const blogPosts = [
  {
    slug: 'complete-guide-youtube-transcripts',
    title: 'Complete Guide to Downloading YouTube Transcripts',
    excerpt: 'Everything you need to know about downloading YouTube transcripts in 2024. Formats, tools, and best practices.',
    date: '2024-01-15',
    category: 'Guides',
    readTime: '8 min read'
  },
  {
    slug: 'youtube-transcript-formats-explained',
    title: 'YouTube Transcript Formats Explained: TXT vs SRT vs VTT vs JSON',
    excerpt: 'Confused about which format to use? Learn the differences and when to use each format.',
    date: '2024-01-10',
    category: 'Tutorials',
    readTime: '6 min read'
  },
  {
    slug: 'youtube-transcripts-for-students',
    title: '10 Ways Students Can Use YouTube Transcripts',
    excerpt: 'Discover how YouTube transcripts can improve your studying, note-taking, and learning efficiency.',
    date: '2024-01-05',
    category: 'Education',
    readTime: '5 min read'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link> / Blog
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">📚 Blog</h1>
          <p className="text-gray-600 mt-2">
            Tips, guides, and best practices for downloading and using YouTube transcripts.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Want to contribute?</h2>
          <p className="text-gray-700 mb-4">
            Have tips or use cases to share? We'd love to feature your story!
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Contact Us
          </Link>
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
