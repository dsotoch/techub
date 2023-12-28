# Utilizamos una imagen de Node.js 18 en Alpine como base
FROM node:18-alpine

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos los archivos de configuración y el paquete.json
COPY package*.json ./

# Instalamos las dependencias
RUN npm ci

# Copiamos el resto de los archivos del proyecto
COPY . .

# Construimos la aplicación (ajusta esto según las necesidades de tu proyecto)
RUN npm run build

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]