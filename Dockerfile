FROM node:14.15.1-alpine3.12

ENV PORT=4000

COPY . /app
WORKDIR /app

RUN npm cache clean && rm -f ~/.npm && npm install

RUN adduser -D nonRootUser
USER nonRootUser

EXPOSE ${PORT}

CMD ["npm","start"]