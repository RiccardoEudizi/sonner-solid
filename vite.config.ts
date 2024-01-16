// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [
   solid(),
   dts({ include: ['src'] })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/index.tsx')],
      name: 'MyLib',
      formats: ['es'],
      // the proper extensions will be added
      fileName: "index",}
    }
})