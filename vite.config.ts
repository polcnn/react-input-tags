import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  preview: {
    port: 5000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
