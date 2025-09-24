# Home Assessment API

A simple Node.js Express API that connects to MongoDB and retrieves user data with age filtering.

## Features

- GET endpoint `/users/:id` that returns user details for users over 21
- MongoDB integration with Mongoose
- Error handling for invalid ObjectId format
- 404 response for users not found or under age requirement

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start MongoDB (make sure MongoDB is running locally)

3. Seed the database with sample data:
```bash
node seed.js
```

4. Start the server:
```bash
npm start
```

## API Endpoints

- `GET /users/:id` - Retrieve user by ID (only returns users over 21)
- `GET /health` - Health check endpoint

## Testing

Use the user IDs displayed after running `node seed.js` to test the API endpoints.
