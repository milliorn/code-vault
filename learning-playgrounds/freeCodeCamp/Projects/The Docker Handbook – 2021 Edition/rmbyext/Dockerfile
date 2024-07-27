# set base image for running py
FROM python:3-alpine

# setup working directory
WORKDIR /zone

# run packages without a cache and then delete them
RUN apk add --no-cache git && \
	pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext && \
	apk del git

ENTRYPOINT [ "rmbyext" ]
