FROM node:lts-alpine

WORKDIR /backend

RUN npm i -g nodemon

COPY package.json .
RUN npm i
COPY . .

EXPOSE 2000

CMD ["npm", "start"]