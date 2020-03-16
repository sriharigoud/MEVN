# MEVN
MongoDB, Express, VueJS, NodeJS

## Build Setup for server

``` bash
# point to server directory from root
cd server

# install dependencies
npm install

# serve at localhost:5000
npm run dev

``` 
You should have installed nodemon and ts-node globally 
<br>.env file should be there with your config 

``` bash
MONGO_USER=<your username>
MONGO_PASSWORD=<your password>
MONGO_PATH=<your cluster url or local url>
PORT=5000
JWT_SECRET=<your JWT secret>

```
## Build Setup for client

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
You need to have .env file with NODE_ENV=Local
<br>You may need to have some packages to be installed globally ex: CLI, ts-node
