/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    root: path.resolve("src/"),
    setupFiles: ["tests/setup.ts"],
  },
  resolve: {
    alias: {
      src: path.resolve("src/"),
    },
  },
});
