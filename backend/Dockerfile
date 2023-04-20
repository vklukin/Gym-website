FROM node:lts-alpine

WORKDIR /backend

COPY package.json .
RUN npm i
COPY . .

EXPOSE 2000

CMD ["npm", "run", "dev"]