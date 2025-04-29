# Blue Racoon Backend

This is the backend server for the Blue Racoon personal dashboard application. It's designed as a single-user application with secure authentication.

## Setting Up the Single User

Since this is a single-user application, you'll need to manually create your user credentials. Here's how to do it:

### Option 1: Using Environment Variables

1. Create a `.env` file in the backend root directory:

```bash
touch .env
```

2. Add the following variables to your `.env` file:

```env
USERNAME=your_username
PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_key
```

3. Make sure to use a strong password and keep the JWT_SECRET secure.

### Option 2: Using a Configuration File

1. Create a `config.ts` file in the `src` directory:

```typescript
export const config = {
  user: {
    username: 'your_username',
    password: 'your_secure_password',
  },
  jwt: {
    secret: 'your_jwt_secret_key',
    expiresIn: '24h'
  }
};
```

2. Import and use this configuration in your authentication middleware.

## Security Best Practices

1. Never commit your `.env` file or configuration with real credentials to version control
2. Use a strong password (at least 12 characters, mix of letters, numbers, and special characters)
3. Keep your JWT_SECRET secure and unique
4. Consider using a password manager to generate and store your credentials

## Starting the Server

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:5005` by default.

## API Endpoints

- `POST /api/auth/login` - Authenticate with username and password
- `GET /api/tasks` - Get all tasks (requires authentication)
- `POST /api/tasks` - Create a new task (requires authentication)
- `PUT /api/tasks/:id` - Update a task (requires authentication)
- `DELETE /api/tasks/:id` - Delete a task (requires authentication)

## Environment Variables

- `PORT` - Server port (default: 5005)
- `USERNAME` - Your username for authentication
- `PASSWORD` - Your password for authentication
- `JWT_SECRET` - Secret key for JWT token generation
- `MONGODB_URI` - MongoDB connection string (if using MongoDB)
