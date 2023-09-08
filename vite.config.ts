/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
