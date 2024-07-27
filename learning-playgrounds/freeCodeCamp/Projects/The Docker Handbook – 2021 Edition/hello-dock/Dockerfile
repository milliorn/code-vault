# set the base image with an alias
FROM node:lts-alpine as builder

# create and set
WORKDIR /app

# copy dependencies from json.
COPY ./package.json ./

# RUN  actually compiles the entire application and tucks it inside 
# /app/dist directory where /app is the working directory and 
# /dist is the default output directory for vite applications.
RUN npm install

# copy files top /app?
COPY . .
RUN npm run build

FROM nginx:stable-alpine

EXPOSE 80

# copy files from the builder stage from src to dest
COPY --from=builder /app/dist /usr/share/nginx/html