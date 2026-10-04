import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const chapters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/chapters" }),
  schema: z.object({
    book: z.string(),
    order: z.number(),
    label: z.string(),
    title: z.string(),
    note: z.string().optional(),
  }),
});

export const collections = { chapters };
