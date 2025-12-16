import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      schema: z.object({
        date: z.string(),
        image: z.string().optional(),
        readingTime: z.number().optional(),
        tags: z.array(z.string()).optional(),
      }),
      source: {
        include: 'blog/**/*.md',
        prefix: '/blog',
      },
      type: 'page',
    }),
    projects: defineCollection({
      schema: z.object({
        featured: z.boolean().optional(),
        icon: z.string().optional(),
        image: z.string().optional(),
        order: z.number().optional(),
        parent: z.string().optional(),
        screenshots: z.array(z.object({
          alt: z.string(),
          caption: z.string().optional(),
          src: z.string(),
        })).optional(),
        stats: z.record(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        techStack: z.record(z.array(z.string())).optional(),
      }),
      source: {
        include: 'projects/**/*.md',
        prefix: '/projects',
      },
      type: 'page',
    }),
  },
})
