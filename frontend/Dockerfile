FROM node:20-alpine3.19 as node
USER 1000
WORKDIR /code

FROM node as install-packages
COPY ./frontend/package.json package.json
COPY ./frontend/package-lock.json package-lock.json
RUN npm ci

FROM node as dev
COPY --from=install-packages --chown=1000 /code/node_modules node_modules
COPY ./frontend/public public
COPY ./frontend/package.json package.json
COPY ./frontend/package-lock.json package-lock.json
COPY ./frontend/tailwind.config.js tailwind.config.js

FROM dev as build
COPY ./frontend/src src
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine3.18-perl as proxy
USER 1000

FROM proxy as proxy-server
COPY --from=build /code/build .
