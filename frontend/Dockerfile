FROM node:20-alpine3.19 as node
WORKDIR /code

FROM node as install-packages
COPY ./frontend/package.json package.json
COPY ./frontend/package-lock.json package-lock.json
RUN npm ci

FROM node as dev
COPY --from=install-packages /code/node_modules node_modules
COPY ./frontend/public public
COPY ./frontend/package.json package.json
COPY ./frontend/package-lock.json package-lock.json
COPY ./frontend/tailwind.config.js tailwind.config.js

FROM dev as build
COPY ./frontend/src src
RUN npm run build

FROM nginx:alpine3.18-perl as proxy

FROM proxy as proxy-server
COPY --from=build /code/build .
