import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    base: '/tictactoes',
    publicDir: '../public',
    build: {
        outDir: './build',
        emptyOutDir: true,
    },
    server: {
        port: 7000,
        open: true
    }
});
