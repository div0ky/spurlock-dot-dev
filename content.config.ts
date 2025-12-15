import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/**/*.md',
        prefix: '/blog',
      },
      schema: z.object({
        tags: z.array(z.string()).optional(),
        date: z.string(),
        readingTime: z.number().optional(),
        image: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'projects/**/*.md',
        prefix: '/projects',
      },
      schema: z.object({
        order: z.number().optional(),
        featured: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        icon: z.string().optional(),
        image: z.string().optional(),
        stats: z.record(z.string()).optional(),
        techStack: z.record(z.array(z.string())).optional(),
        screenshots: z.array(z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })).optional(),
      }),
    }),
  },
})

