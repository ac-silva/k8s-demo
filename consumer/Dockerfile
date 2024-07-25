# container build
FROM node:lts-alpine AS build
WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm run build

# container start
FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
