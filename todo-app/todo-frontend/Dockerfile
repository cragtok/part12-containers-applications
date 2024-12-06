FROM node:20
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
ENV VITE_BACKEND_URL=http://localhost:3000
CMD ["npm", "run", "dev", "--", "--host"]
