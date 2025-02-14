# User Authentication API

A RESTful API built with Express.js and MongoDB for user authentication and search functionality.

## Features

- User registration with data validation
- User login with JWT authentication
- Protected user search endpoint
- MongoDB integration with Mongoose
- Input validation using express-validator
- Password hashing using bcryptjs
- JWT-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas URI)
- Postman (for testing the API)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/user-auth-db
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- Body:
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123",
    "fullName": "John Doe",
    "gender": "male",
    "dateOfBirth": "1990-01-01",
    "country": "USA"
  }
  ```

#### Login
- **POST** `/api/auth/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### User Operations

#### Search Users
- **GET** `/api/users/search?query=john`
- Headers:
  ```
  Authorization: Bearer your_jwt_token
  ```

## Testing with Postman

1. Import the provided Postman collection
2. Create a new environment and set the following variables:
   - `baseUrl`: http://localhost:3000
   - `token`: (will be automatically set after login)
3. Test the endpoints in the following order:
   - Register a new user
   - Login with the registered user
   - Search for users (using the JWT token from login)

## Security Features

- Passwords are hashed using bcryptjs
- JWT tokens for authentication
- Input validation and sanitization
- Protected routes using middleware
- Secure password storage
- CORS enabled

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- Server errors

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
