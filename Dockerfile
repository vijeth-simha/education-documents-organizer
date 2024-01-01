# Step 1: Choose a base image
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy source code
COPY . .

# Step 6: Compile TypeScript to JavaScript
RUN npm run build

# Step 7: Define the command to run the app
CMD ["node", "dist/app.js"]