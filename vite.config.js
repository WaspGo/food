import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"],
    }),
  ],
  root: ".",
  // Use relative asset URLs so the built site works from a MAMP subdirectory.
  base: "./",
  build: {
    outDir: "dist",
  },
});
