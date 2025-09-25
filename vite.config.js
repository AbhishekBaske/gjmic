import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],

  build: {
    // Don’t leak code details
    sourcemap: false, // remove source maps in production
    minify: "esbuild", // fast & safe minifier
    target: "es2018", // drop support for old, less secure syntax
    rollupOptions: {
      output: {
        // Prevent module info leakage in bundle chunks
        manualChunks: undefined,
      },
    },
  },

  server: {
    strictPort: true,
  },

  // Only expose safe environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
}));
