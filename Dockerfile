
#Image from dockerhub
FROM node:8

#app directory
WORKDIR /usr/src/proxy

COPY package*.json ./

RUN npm install
#bundle app source
COPY . .

EXPOSE 3000


CMD [ "npm", "start"] 
