# Practical Docker use with NodeJS (RestAPI) and MongoDB

This is a repository to practice NodeJS, MongoDB and a Docker implementation.

## To execute (Docker-Compose)

Run the next command into the folder:
```
docker compose up
```

docker run -d -p 27017:27017 --name mongoDB -e MONGO_INITDB_ROOT_USERNAME=sebastiancb -e MONGO_INITDB_ROOT_PASSWORD=password  --expose 27017 mongo