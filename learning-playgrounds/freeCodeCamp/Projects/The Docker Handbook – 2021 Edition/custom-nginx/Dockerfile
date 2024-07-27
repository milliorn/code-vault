# sets alpine as the base image

FROM alpine:latest

EXPOSE 80

# change the version or filename by just changing the argument.
ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"

# add the the nginx file inside the image to the working directory as its destination.
ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .

# installs standard packages necessary for building NGINX from source.
# --no-cache option means that the downloaded package won't be cached
# --virtual option for the apk add command is used for bundling a bunch of packages into a single virtual package
# Packages that are needed only for building the program are labeled as .build-deps
# cd inside that directory and perform the build process. 
RUN apk add --no-cache pcre zlib && \
	apk add --no-cache \
	--virtual .build-deps \
	build-base \ 
	pcre-dev \
	zlib-dev \
	openssl-dev && \
	tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION} && \
	cd ${FILENAME} && \
	./configure \
	--sbin-path=/usr/bin/nginx \
	--conf-path=/etc/nginx/nginx.conf \
	--error-log-path=/var/log/nginx/error.log \
	--http-log-path=/var/log/nginx/access.log \
	--with-pcre \
	--pid-path=/var/run/nginx.pid \
	--with-http_ssl_module && \
	make && make install && \
	cd / && rm -rfv /${FILENAME} && \
	apk del .build-deps

# start NGINX in single process mode
CMD ["nginx", "-g", "daemon off;"]
