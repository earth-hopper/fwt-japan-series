import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  // loaderを追加し、Markdownファイルがあるディレクトリを指定します
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().default('NEWS'),
    thumbnail: z.string().default('/img/og-main.jpg'),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};