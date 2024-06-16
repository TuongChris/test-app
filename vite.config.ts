import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/assets/css"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  plugins: [react()],
});
