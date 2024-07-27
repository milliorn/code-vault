# The Docker Handbook – 2021 Edition

<https://www.freecodecamp.org/news/the-docker-handbook/>

<https://github.com/fhsinchy/docker-handbook-projects/>

<https://hub.docker.com/>

<http://127.0.0.1:8080/> - nginx

<http://nginx.org/>

<https://itsfoss.com/install-software-from-source-code/>

<https://alpinelinux.org/>

<https://ubuntu.com/>

<https://docs.docker.com/get-started/04_sharing_app/>

<https://docs.docker.com/storage/bind-mounts/>

<https://forums.docker.com/t/what-does-copy-mean/74121/2>

<https://hub.docker.com/_/postgres>

<https://docs.docker.com/compose/>

```bash
docker run hello-world
```

```bash
uname -a
```

```bash
docker run alpine uname -a
```

```bash
docker container run --publish 8080:80 fhsinchy/hello-dock
```

```bash
docker container run --rm --detach --name default-nginx --publish 8080:80 nginx
```

```bash
docker image build --tag custom-nginx:built .
```

```bash
docker container run --rm --publish 3000:3000 --name hello-dock-dev --volume $(pwd):/home/node/app hello-dock:dev
```

```bash
docker container run --detach --name=notes-db --env POSTGRES_DB=notesdb --env POSTGRES_PASSWORD=secret --network=notes-api-network postgres:12
```

```bash
docker container run --detach --volume notes-db-data:/var/lib/postgresql/data --name=notes-db --env POSTGRES_DB=notesdb --env POSTGRES_PASSWORD=secret --network=notes-api-network postgres:12
```

```bash
docker container run --detach --name=notes-api --env DB_HOST=notes-db --env DB_DATABASE=notesdb --env DB_PASSWORD=secret --publish=3000:3000 --network=notes-api-network notes-api
```

```bash
docker-compose --file docker-compose.yaml up --detach
```

```bash
docker-compose exec api npm run db:migrate
```

<https://www.freecodecamp.org/news/the-docker-handbook/#how-to-compose-a-full-stack-application-in-docker-compose>

How to Compose a Full-stack Application in Docker Compose
