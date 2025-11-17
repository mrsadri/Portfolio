import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./config/setupTests.ts",
    globals: true,
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});


