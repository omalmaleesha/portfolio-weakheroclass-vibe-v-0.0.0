import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-weakheroclass-vibe-v-0.0.0/",
  plugins: [ tailwindcss(),react()],
})
