# Uses the official Playwright image
FROM mcr.microsoft.com/playwright:v1.58.2-jammy

# Sets the working directory
WORKDIR /app

# Copies package.json and installs dependencies
COPY package*.json ./
RUN npm ci

# Copies the rest of the test framework
COPY . .

# Runs the tests
CMD ["npx", "playwright", "test"]
