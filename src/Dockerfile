FROM node:20-alpine3.19 as node
WORKDIR /src

FROM node as install-packages
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm ci

FROM node as dev
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
COPY ./tailwind.config.js /src/tailwind.config.js
COPY ./public /src/public
COPY --from=install-packages /src/node_modules node_modules

FROM node as build
COPY --from=install-packages /src/node_modules node_modules
COPY . .
# RUN npm run build

FROM nginx:alpine3.18-perl as proxy
# ARG DEPLOY_ENV=prod
# COPY --from=build /src/build .
# COPY ../proxy/$DEPLOY_ENV.nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8443
