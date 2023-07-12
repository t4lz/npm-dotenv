FROM node:buster
WORKDIR /app
RUN npm install dotenv --save
COPY index.js package.json ./
RUN echo "TEST_DOTENV=WORKING\n" > .env
ENTRYPOINT ["node", "index.js"]