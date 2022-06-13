# syntax=docker/dockerfile:1
FROM node:16.14.2
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install





