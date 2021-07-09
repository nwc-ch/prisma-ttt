FROM node:16-slim
WORKDIR /app
ADD package.json /app/package.json
COPY tsconfig.* /app/
COPY nest-cli.json /app/
COPY src/ /app/src/
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]
