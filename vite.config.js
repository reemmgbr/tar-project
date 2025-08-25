import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Required for resolving paths
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Basic alias pointing to src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
