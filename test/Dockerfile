# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install WebDriver.io and its dependencies
RUN yarn install

# Copy your WebDriver.io test suite files and configuration
COPY . .

# Define the command to run your WebDriver.io tests
CMD ["yarn", "test:local"]
