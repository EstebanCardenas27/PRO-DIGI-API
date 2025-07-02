import { defineConfig } from 'vite'
import tsconfigPaths  from 'vite-tsconfig-paths'
import { preact } from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    tailwindcss(),
  ],

})
