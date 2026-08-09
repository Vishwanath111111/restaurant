import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rasoimahal.com';

  const routes = [
    '',
    '/about',
    '/our-story',
    '/menu',
    '/chef',
    '/private-dining',
    '/events',
    '/wedding-catering',
    '/corporate-catering',
    '/gallery',
    '/reservation',
    '/testimonials',
    '/blog',
    '/faqs',
    '/contact',
    '/privacy-policy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
