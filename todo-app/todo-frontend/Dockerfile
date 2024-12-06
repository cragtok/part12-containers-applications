FROM node:20 as base
WORKDIR /usr/src/app
COPY --chown=node:node . .

FROM base as install-stage
RUN npm ci

FROM base as test-stage
COPY --from=install-stage /usr/src/app/node_modules /usr/src/app/node_modules
RUN npm run test

FROM base as run-stage
COPY --from=test-stage /usr/src/app/node_modules /usr/src/app/node_modules
ENV VITE_BACKEND_URL=http://localhost:3000
CMD ["npm", "run", "dev", "--", "--host"]
