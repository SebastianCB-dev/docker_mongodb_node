#### Practical Docker use with NodeJS (RestAPI) and MongoDB

This is a repository to practice NodeJS, MongoDB and a Docker implementation.

## Dockerfile

Execute the following commands:
1. To build the image
```
npm build -t node_express_mongoose .
```

2. Run a container (Expose the port 9999 into the container)
```
docker run -dp 9999:9999 node_express_mongoose
```