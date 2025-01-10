import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    link: z.string().url(),
  }),
});

export const collections = {
  news: newsCollection,
};
