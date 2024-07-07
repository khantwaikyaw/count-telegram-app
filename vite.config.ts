import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: { port: 3000 },
	plugins: [react(), viteBasicSslPlugin()],
	build: {
		outDir: './docs',
	},
	base: './',
});
