import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Required for Vercel
  base: "/",

  plugins: [react()],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "dist", // ✅ MUST be dist for Vercel
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
});
