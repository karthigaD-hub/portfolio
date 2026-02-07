import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Required for Vercel (root deployment)
  base: "/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "dist",      // ✅ Vercel expects this
    emptyOutDir: true,   // ✅ clean build
  },

  server: {
    port: 3000,
  },
});
