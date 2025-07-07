# Etapa de construcción
FROM node:20-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build -- --configuration production

# Etapa de producción
FROM nginx:alpine

# Copiar configuración personalizada de Nginx
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Eliminar archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos construidos
COPY --from=build /app/dist/chat-ollama/ /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
