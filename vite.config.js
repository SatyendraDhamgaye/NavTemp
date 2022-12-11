import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// hhtps: //vitejs.dev/config/
export default defineConfig({

plugin: [react()],
base: '/NavTemp/'
})