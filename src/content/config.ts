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
      tours: z.object({
        heading: z.string(),
        button_text: z.string(),
        button_link: z.string(),
      }),
      classes: z
        .object({
          heading: z.string().optional(),
          heading_span: z.string().optional(),
          subheading: z.string().optional(),
          paragraph: z.string().optional(),
          button_text: z.string().optional(),
          button_link: z.string().optional(),
          image_1: z.object({
            src: image(),
            alt: z.string(),
          }),
          image_2: z.object({
            src: image(),
            alt: z.string(),
          }),
          image_3: z.object({
            src: image(),
            alt: z.string(),
          }),
        })
        .optional(),
      rentals: z.object({
        heading: z.string(),
        cards: z.array(
          z.object({
            duration: z.string(),
            cost: z.string(),
            button_text: z.string(),
            button_link: z.string(),
            image: image(),
          })
        ),
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
          src: image(),
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

const rentals = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      equipment: z.string(),
      rental_modality: z.array(
        z.object({
          duration: z.string(),
          cost: z.string(),
        })
      ),
      club_three_days: z.object({
        duration: z.string(),
        cost: z.string(),
      }),

      club_five_days: z.object({
        duration: z.string(),
        cost: z.string(),
      }),

      whatsapp_button: z.string(),
      image: image(),
    }),
});

const classes = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      subheading: z.string(),
      paragraph: z.string(),
      duration: z.string(),
      cost: z.string(),
      whatsapp_text: z.string(),
      whatsapp_link: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  frontPage: frontPage,
  tours: tours,
  rentals,
  classes,
};
