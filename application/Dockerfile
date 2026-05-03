FROM node:18-alpine AS builder
WORKDIR /application
COPY package*.json .
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["node", "app.js"]

