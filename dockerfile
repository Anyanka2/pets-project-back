FROM node:18.18-buster

WORKDIR /app

RUN git clone https://github.com/Anyanka2/pets-project-back.git .
COPY .env .env
EXPOSE 3030

RUN npm install

CMD ["npm", "start"]
