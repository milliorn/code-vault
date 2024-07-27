# How to Dockerize a React Application – A Step by Step Tutorial

https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/

## How to Write a Dockerfile

https://docs.docker.com/engine/reference/builder/

## What Are Docker Image Layers and How Do They Work?

https://kodekloud.com/blog/docker-image-layers/

## Node Image

https://hub.docker.com/_/node

## How to Build the Image

`docker image build -t <image_name>:<tag> <path>`

`docker image build -t dockerize-react-image:latest .`

Now, run `docker images` to see a list of images in your system. You'll see the details of the image you just created.

## How to Run the Image

`docker container run -p <host_port>:<container_port> <image_name>:<tag>`

`docker container run -p 3000:3000 dockerize-react-image:latest`

Make sure you are using the correct IP address for the container. If the IP address changes every time the container starts, you can find the correct IP address using the command:

`docker container inspect <container_id>`

`docker inspect -f "{{ .NetworkSettings.IPAddress }}" your_container_id_or_name`

To stop a running container, use the docker stop command with the container id or name.

`docker container stop <container_id_or_name>`

To remove the container, use the `docker rm` command followed by the container id or name.

`docker container rm <container_id_or_name>`

