import { defineConfig } from 'vite'
import vitePluginSingleSpa from "vite-plugin-single-spa";
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // adding react plugin causes issues with single-spa webpack shell
    // react(),
    // https://single-spa.js.org/docs/ecosystem-vite/
    vitePluginSingleSpa({
      type: 'root',
      // TODO: add importMaps?
      imo: true,
      imoUi: 'full',
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3010,
  },
})
