/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
            // Desactiva la generación para ciertas rutas
            {
                source: '/:path*',   // Coincide con cualquier ruta y cualquier subruta
                destination: '/_error',  // Redirige a la página de error
            },
        ];
    },

}

module.exports = nextConfig
