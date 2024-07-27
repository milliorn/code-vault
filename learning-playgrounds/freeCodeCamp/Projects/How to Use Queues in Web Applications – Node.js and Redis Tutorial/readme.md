# How to Use Queues in Web Applications – Node.js and Redis Tutorial

https://www.freecodecamp.org/news/how-to-use-queues-in-web-applications/

## Install Redis on Windows

https://redis.io/docs/getting-started/installation/install-redis-on-windows/

Lastly, start the Redis server like so:

```bash
sudo service redis-server start
```

## Connect to Redis

```bash
redis-cli
```

When you see `127.0.0.1:6379>` type `ping` and press enter. You should see `PONG` in response.

## What is Bull?

Bull is a Node library that implements a fast and robust queue system based on redis.

https://optimalbits.github.io/bull/

```bash
npm i bull --save
npm i bull @types/bull
```

## Install the Required Dependencies

```bash
npm i express @types/express @types/node body-parser ts-node ts-lint typescript nodemon nodemailer @types/nodemailer
```
