# Use Node LTS
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --production

# Copy source
COPY . .

# Build step if needed (e.g., TypeScript)
# RUN npm run build

# Expose port
EXPOSE 5000

# Use a non-root user (alpine default)
CMD ["node","server.js"]
