import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4242',
    supportFile: false,
    experimentalFetchPolyfill: true,
  },
});
