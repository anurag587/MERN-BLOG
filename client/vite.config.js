import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['mongoose'], // Ensure mongoose is not included in the client bundle
    },
});
