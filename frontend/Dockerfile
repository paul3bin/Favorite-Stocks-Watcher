FROM node:16.15.1-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install 

RUN npm install react-scripts@5.0.1 --location=global

COPY . ./

EXPOSE 3000