import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        https: {
          key: '/etc/letsencrypt/live/back-techub.viru-tec.com/privkey.pem',
          cert: '/etc/letsencrypt/live/back-techub.viru-tec.com/fullchain.pem'
        },
        host: '0.0.0.0',
        port: 5173,
      }
});
