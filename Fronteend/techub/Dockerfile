# Etapa para instalar dependencias
FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Etapa para construir la aplicación
FROM  node:18-alpine as builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .
RUN npm run build

# Etapa final para ejecutar la aplicación
FROM  node:18-alpine as runner
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY .env .

# Incluye CMD al final del Dockerfile
CMD ["node", "dist/main.js"]