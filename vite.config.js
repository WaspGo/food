import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // Use relative asset URLs so the built site works from a MAMP subdirectory.
  base: "./",
  build: {
    outDir: "dist",
  },
});
