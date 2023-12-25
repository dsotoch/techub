#ETAPA DE CONSTRUCCION
FROM node:alpine AS Build

#directorio de trabajo
WORKDIR /app

#copiar archivos de configuracion
COPY package*.json ./

#instalar dependencias
RUN npm install

#copiar resto de aplicacion
COPY . .

#construir la aplicacion
RUN npm run build

#etapa de produccion
FROM node:alpine AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next

RUN npm ci --production

EXPOSE 3000

CMD ["npm","start"] 
