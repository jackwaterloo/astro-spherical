import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),
      demoUrl: z.string().optional(),
      repoUrl: z.string().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, projects, legal };
