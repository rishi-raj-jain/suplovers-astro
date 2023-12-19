// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const frontPage = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      hero: z.object({
        heading: z.string(),
        subheading: z.string(),
        image: image(),
      }),
    }),
});

const tours = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      card: z.object({
        title: z.string(),
        paragraph: z.string(),
        button_text: z.string(),
        button_link: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
      }),
      section_1: z.object({
        title: z.string(),
        description: z.string(),
        button_text: z.string(),
        image: image(),
      }),
      section_2: z.object({
        title: z.string(),
        description: z.string(),
        highlights: z.array(z.string()),
        map: z.object({
          src: z.string(),
        }),

        stats: z.object({
          distance: z.string(),
          duration: z.string(),
          difficulty: z.string(),
        }),
      }),
      section_4: z.object({
        inclusions: z.array(z.string()),
      }),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  frontPage: frontPage,
  tours: tours,
};
