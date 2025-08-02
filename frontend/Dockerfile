# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve static files with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
