import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://suplovers.co",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [tailwind()],
});
