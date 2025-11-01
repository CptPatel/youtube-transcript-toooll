import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://cff7d8ae-7b8a-413e-bf62-a70280206b85.canvases.tempo.build/sitemap.xml',
  };
}
