
import type { MetadataRoute } from 'next';
import { tools } from '../lib/calculators';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cryptocalcgrid.com';

  return [
    {
      url: `${baseUrl}/`,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/calculators/${tool.slug}`,
    })),
  ];
}
