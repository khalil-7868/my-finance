import '@worktopio/sitemap';
import { MetadataRoute } from 'next';
import pages from 'public/pages.json';

import { absoluteUrl } from 'lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return pages.map((page: Page) => ({
    url: `${absoluteUrl('')}${page.href}`,
    lastModified: new Date()
  }));
}
