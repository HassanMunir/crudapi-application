FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Use environment variables from docker-compose
ENV DB_HOST=db
ENV DB_PORT=5432
ENV DB_USER=admin
ENV DB_PASSWORD=admin123
ENV DB_NAME=db123

# Start the application
CMD ["npm", "start"]
