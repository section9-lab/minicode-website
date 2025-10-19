import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    locale: z.enum(['en', 'zh', 'ja']).default('en'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};