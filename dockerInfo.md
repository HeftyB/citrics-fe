Build
```
docker build -t citrics-fe:v1 .
```
Run
```
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 citrics-fe:v1


docker run \
    -it \ (name)
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    citrics-fe:v1
```