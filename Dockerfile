FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install

# Bundle app source
COPY app/ .

## Create system user, no pass, no shell, no home dir
RUN adduser -s /bin/false -S -D -H app
RUN chown -R app /usr/src/app
USER app

EXPOSE 3000
ENV SERVER_PORT=3000
ENV NODE_ENV=development

CMD ["npm", "run", "start"]