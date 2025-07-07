# Stage 1: Build Angular application
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install @angular/build @angular/cli --save-dev
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve Angular application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/chat-ollama/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
