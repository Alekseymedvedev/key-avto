FROM node:14.3-alpine

EXPOSE 3000

WORKDIR /app
COPY package*.json ./package.json

RUN npm install

COPY public ./public
COPY package-lock.json ./package-lock.json
COPY tsconfig.json ./tsconfig.json
COPY .eslintrc.json ./.eslintrc.json
COPY next.config.js ./next.config.js
COPY .next ./.next
COPY . .

RUN npm run build

CMD ["npm", "start"]




