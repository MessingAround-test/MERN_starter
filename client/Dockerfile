# Pull Docker Hub base image
FROM node:14.16.0-alpine3.10
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
# Copy app to container
COPY . .


RUN npm install -qyg nodemon
RUN npm install -qyg express
RUN npm install -qy

# Run the "dev" script in package.json
CMD ["npm", "start"]