# stage one with alias for base
FROM node:lts-alpine as builder

# install dependencies for node-gyp
RUN apk add --no-cache python make g++

# set dir
WORKDIR /app

# copy to dir and install 
COPY ./package.json .
RUN npm install --only=prod

# stage two set base
FROM node:lts-alpine

EXPOSE 3000
ENV NODE_ENV=production

# set user to node
USER node

# create dir
RUN mkdir -p /home/node/app

# set dir
WORKDIR /home/node/app

COPY . .
COPY --from=builder /app/node_modules /home/node/app/node_modules

CMD [ "node", "bin/www" ]
