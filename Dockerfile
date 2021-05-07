# pull image
FROM node:alpine
# set working directory
WORKDIR /app
# add node modules to path
ENV PATH /app/node_modules/.bin:$PATH
# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]