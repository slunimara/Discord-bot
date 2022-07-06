# Build stage
FROM node:lts-alpine AS BuildStage

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build



# Run stage
FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY --from=BuildStage /app /app

RUN npm install --production

RUN export DISCORD_CLIENT_ID=$(cat /run/secrets/CLIENTID) && \
    export DISCORD_GUILD_ID=$(cat /run/secrets/GUILDID) && \
    export DISCORD_TOKEN=$(cat /run/secrets/TOKEN)

CMD [ "node", "/app/dist/index.js" ]
