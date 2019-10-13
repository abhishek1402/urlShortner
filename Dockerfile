FROM node:10.15.0
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 8080
RUN npm install && npm install nodemon -g && npm install typescript -g
CMD [ "npm","run","dev" ]
