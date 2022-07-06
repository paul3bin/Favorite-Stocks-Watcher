FROM node:16.15.1-slim

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install 

RUN npm install react-scripts@5.0.1

COPY . ./

EXPOSE 3000