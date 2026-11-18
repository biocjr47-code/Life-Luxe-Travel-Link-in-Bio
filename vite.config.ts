import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  /**
   * RELATIVE, not "/". The built page has to work in three places
   * without a rebuild: a GitHub Pages project site (served from
   * /Life-Luxe-Travel-Link-in-Bio/), a domain root, and whatever
   * subfolder a host drops it in. "./" emits relative asset URLs,
   * and `asset()` in src/site.ts prefixes the images the same way.
   */
  base: "./",
  plugins: [react(), tailwindcss()],
});
