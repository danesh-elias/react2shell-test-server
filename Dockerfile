FROM node:20-alpine

WORKDIR /app

# Install bash (and curl together)
RUN apk add --no-cache bash curl

# Set bash as the default shell for RUN
SHELL ["/bin/bash", "-c"]

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["npm", "start"]