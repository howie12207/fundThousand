import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath, URL } from 'url';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [react()],
        base: process.env.VITE_BASE_URL,
        define: {
            __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/proxyBase': {
                    target: 'https://wt.franklin.com.tw:8080',
                    changeOrigin: true,
                    secure: false,
                    rewrite: path => path.replace(/^\/proxyBase/, ''),
                },
                '/proxy8081': {
                    target: 'https://wt.franklin.com.tw:8081',
                    changeOrigin: true,
                    secure: false,
                    rewrite: path => path.replace(/^\/proxy8081/, ''),
                },
            },
        },
    });
};
