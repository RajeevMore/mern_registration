import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
  server: {
    allowedHosts: ['www.mern.ibrainstar.in', 'mern.ibrainstar.in']
  }
})
