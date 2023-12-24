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
        cost: z.string(),
        highlights: z.object({
          title: z.string(),
          list: z.array(z.string()),
        }),
        map: z.object({
          src: z.string(),
        }),

        stats: z.object({
          distance: z.string(),
          duration: z.string(),
          difficulty: z.string(),
        }),
      }),
      section_3: z.object({
        title: z.string(),
        inclusions: z.array(z.string()),
      }),
    }),
});

const rentals = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      subheading: z.string(),
      equipment: z.string(),
      rental_modalities: z.object({
        title: z.string(),
        list: z.array(
          z.object({
            duration: z.string(),
            cost: z.string(),
          })
        ),
      }),

      club_three_days: z.object({
        title: z.string(),
        duration: z.string(),
        cost: z.string(),
      }),

      club_five_days: z.object({
        title: z.string(),
        duration: z.string(),
        cost: z.string(),
      }),

      whatsapp_button: z.string(),
      whatsapp_link: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

const classes = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      subheading: z.string(),
      description: z.string(),

      duration: z.object({
        title: z.string(),
        duration: z.string(),
      }),
      cost: z.object({
        title: z.string(),
        cost: z.string(),
      }),

      whatsapp_text: z.string(),
      whatsapp_link: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

const subheadingSchema = z.object({
  main: z.string(),
  span: z.string(),
});

const about_us = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      about_us: z.object({
        heading: z.string(),
        subheading: subheadingSchema,
        description: z.string(),
        button_text: z.string(),
        button_link: z.string(),
        image: z.object({
          src: image(),
          alt: z.string(),
        }),
      }),
      philosophy: z.object({
        heading: z.string(),
        subheading: subheadingSchema,
        description: z.string(),
        button_text: z.string(),
        button_link: z.string(),
        image: z.object({
          src: image(),
          alt: z.string(),
        }),
      }),
      join_us: z.object({
        heading: z.string(),
        description: z.string(),
        button_text: z.string(),
        button_link: z.string(),
      }),
    }),
});

const contact = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      description: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  frontPage: frontPage,
  tours: tours,
  rentals,
  classes,
  about_us,
  contact,
};
