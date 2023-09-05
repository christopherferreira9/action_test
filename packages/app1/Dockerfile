# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Define the command to start the React app
CMD [ "yarn", "start" ]
