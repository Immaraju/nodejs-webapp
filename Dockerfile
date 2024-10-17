# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you have them).
# Uncomment the line below if you have a package.json.
# COPY package*.json ./ 

# Copy the rest of your application code.
COPY . .

# Expose the application port.
EXPOSE 3000

# Command to run your app
CMD ["node", "server.js"]
