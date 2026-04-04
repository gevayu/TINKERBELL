import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        tinkerbell01: resolve(__dirname, 'tinkerbell01.html'),
        tinkerbell02: resolve(__dirname, 'tinkerbell02.html'),
        tinkerbell03: resolve(__dirname, 'tinkerbell03.html'),
        tinkerbell04: resolve(__dirname, 'tinkerbell04.html'),
      },
    },
  },
})
