FROM node:20 as base
WORKDIR /usr/src/app
COPY --chown=node:node . .

FROM base as test-stage
RUN npm ci
RUN npm run test

FROM base as build-stage
COPY --from=test-stage /usr/src/app/node_modules /usr/src/app/node_modules
ENV VITE_BACKEND_URL=http://localhost:8080/api
RUN npm run build
RUN npm prune --production

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
