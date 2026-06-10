import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    experiences: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
      })
    ),
  }),
});

export const collections = {
  experience: experienceCollection,
};
