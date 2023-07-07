FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node
COPY package*.json .

RUN yarn install
COPY . .
COPY src src
COPY tsconfig.json .
RUN yarn build && yarn cache clean

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node
COPY package*.json  ./

RUN yarn install --production
COPY --from=build /home/node /home/node

EXPOSE 3000

CMD ["node", "dist/server.js"]
