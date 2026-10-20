import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),

    visualizer({
      filename: 'dist/stats.html',
      template: 'treemap',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],

  build: {
    sourcemap: true
  }
})