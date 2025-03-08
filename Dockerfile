# Use Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json first
COPY package.json ./

# Install dependencies (including Tailwind plugin)
RUN npm install  # ✅ Ensures all dependencies, including @tailwindcss/typography, are installed

# Copy the rest of the project files
COPY . .

# Expose the port Astro runs on
EXPOSE 3000

# Start Astro
CMD ["npm", "run", "dev"]
