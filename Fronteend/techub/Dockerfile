FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM  node:18-alpine as builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .
RUN npm run build

FROM  node:18-alpine as runner
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY .env .

CMD ["node", "dist/main.js"]

