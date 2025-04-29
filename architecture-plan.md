# Blue Racoon - Architecture Plan

## System Overview

Blue Racoon is designed as a modern web application with a clear separation between frontend and backend components. The architecture follows best practices for scalability, maintainability, and security.

```bash
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│    Frontend     │◄────►│    Backend      │◄────►│    Database     │
│    (Vercel)     │      │  (Digital Ocean)│      │                 │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
        ▲                        ▲
        │                        │
        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│   External APIs  │     │  Authentication │
│   (Gmail, etc.)  │     │     Service     │
│                  │     │                 │
└──────────────────┘     └─────────────────┘
```

## Frontend Architecture

### Frontend Technology Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **UI Library:** Material UI v7
- **State Management:** React Context + Custom Hooks
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **Date Handling:** date-fns
- **Hosting:** Vercel

### Project Structure - API

```bash
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/        # Shared components (buttons, inputs, etc.)
│   │   ├── layout/        # Layout components (header, footer, etc.)
│   │   └── features/      # Feature-specific components
│   ├── contexts/          # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service layer
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── theme/             # Theme configuration
│   └── App.tsx            # Root component
```

### Component Architecture

1. **Layout Components**
   - `MainLayout` (contains TopBar and ContentArea)
   - `TopBar` (contains recommendation bar, fixed items, etc.)
   - `ContentArea` (main task list and details)

2. **Feature Components**
   - `TaskCard` (individual task display)
   - `TaskCreationForm` (create new tasks)
   - `TaskList` (list of all tasks)
   - `TaskEditForm` (edit existing tasks)
   - `EmailWidget` (Gmail integration)
   - `RecurringItemsWidget` (recurring tasks)
   - `Analytics` (charts and trends)

3. **Context Providers**
   - `AuthContext` (authentication state)
   - `ThemeContext` (UI theme preferences)
   - `TaskContext` (global task state)

4. **Custom Hooks**
   - `useAuth` (authentication logic)
   - `useTasks` (task management)
   - `useTheme` (theme management)

### Frontend Security

- Authentication token storage using HTTP-only cookies
- Input validation and sanitization
- Protection against XSS attacks
- CSRF protection
- Environment variable validation

## Backend Architecture

### Backend Technology Stack

- **Runtime:** Node.js 20
- **Framework:** Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Validation:** Express Validator
- **Logging:** Morgan
- **Security:** Helmet
- **CORS:** Express CORS
- **Hosting:** Digital Ocean

### Project Structure - Frontend

```bash
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── index.ts          # Application entry point
```

### API Structure

- RESTful API endpoints
- JWT-based authentication
- Rate limiting and security headers
- Error handling middleware
- Request validation middleware

### Endpoints

1. **Authentication**
   - `POST /api/auth/login` - User login
   - `POST /api/auth/logout` - User logout
   - `GET /api/auth/check` - Check authentication status

2. **Tasks**
   - `GET /api/tasks` - Get all tasks (filtered, paginated)
   - `GET /api/tasks/:id` - Get single task
   - `POST /api/tasks` - Create new task
   - `PATCH /api/tasks/:id` - Update task
   - `DELETE /api/tasks/:id` - Delete task

3. **Integrations**
   - `GET /api/integrations/gmail` - Gmail integration status
   - `GET /api/integrations/github` - GitHub integration status
   - `POST /api/integrations/settings` - Update integration settings

### Server Security

- Environment variables for secrets
- Request validation
- API rate limiting
- Proper error handling and logging
- CORS configuration
- Security headers
- Input sanitization

## Database Architecture

### Structure

- MongoDB collections with proper schemas
- Indexes for performance optimization
- Data validation at schema level

### Main Collections

1. **Tasks**

   ```typescript
   interface Task {
     _id: string;
     title: string;
     description: string;
     type: 'work' | 'personal' | 'health';
     importance: 'low' | 'medium' | 'high';
     dueDate: Date;
     createdAt: Date;
     updatedAt: Date;
     lastWorkedOn: Date;
     workHistory: {
       date: Date;
       duration: number;
     }[];
   }
   ```

2. **ActivityLogs**

   ```typescript
   interface ActivityLog {
     _id: string;
     action: string;
     timestamp: Date;
     details: Record<string, any>;
   }
   ```

### Database Security

- Encrypted connections
- Access control
- Regular backups
- Sanitized inputs
- Schema validation

## External Integrations

1. **Gmail API**
   - OAuth2 authentication
   - Email count retrieval
   - Periodic polling or webhook-based updates

2. **GitHub API** (for analytics)
   - OAuth2 authentication
   - Commit history retrieval
   - Activity tracking

3. **Additional Potential Integrations**
   - Calendar services
   - Fitness tracking APIs
   - Reading progress APIs

## Deployment Strategy

1. **Frontend**
   - Continuous deployment via Vercel
   - Environment-based configuration
   - CDN for static assets
   - Automated testing before deployment

2. **Backend**
   - Container-based deployment on Digital Ocean
   - CI/CD pipeline
   - Automated testing before deployment
   - Health checks and monitoring

3. **Database**
   - Managed database service
   - Backup and recovery plan
   - Migration strategy
   - Performance monitoring

## Security Considerations

- Secure authentication with JWTs
- HTTPS for all communications
- Input validation and sanitization
- Protection against common vulnerabilities (OWASP Top 10)
- Regular security audits
- Rate limiting
- CORS configuration
- Security headers

## Monitoring and Logging

- Application performance monitoring
- Error tracking
- User activity logging
- Database query performance
- API response times
- Resource usage

## Development and Build Tools

### Development Environment

- **TypeScript Development:** Use `tsx` for development
  - Fast compilation and execution
  - Modern ES modules support
  - Hot module replacement
  - Better development experience

- **Production Builds:** Use `tsc` for production
  - Safe and optimized builds
  - Type checking
  - Tree shaking
  - Production-ready output

### Development Tools

1. **Code Quality**
   - ESLint for linting
   - Prettier for formatting
   - TypeScript for type safety
   - Husky for git hooks

2. **Development Server**
   - Vite for frontend
   - Nodemon + ts-node for backend
   - Hot reloading
   - Development-specific configurations

3. **Testing Tools**
   - Jest for unit testing
   - React Testing Library for frontend tests
   - Supertest for API testing
   - Cypress for E2E testing

4. **Documentation**
   - JSDoc for code documentation
   - Swagger/OpenAPI for API documentation
   - Storybook for component documentation
   - Markdown for project documentation

### Build Process

1. **Frontend Build**

   ```bash
   # Development
   npm run dev        # Vite dev server with hot reload
   
   # Production
   npm run build     # Vite build with optimization
   npm run preview   # Preview production build
   ```

2. **Backend Build**

   ```bash
   # Development
   npm run dev       # Nodemon + ts-node with watch mode
   
   # Production
   npm run build     # TypeScript compilation
   npm run start     # Start production server
   ```

3. **Build Optimization**
   - Code splitting
   - Tree shaking
   - Minification
   - Source maps for production debugging

4. **Environment Configuration**
   - Development-specific settings
   - Production optimizations
   - Environment variable management
   - Secret handling

## Development Workflow

1. **Local Development**
   - Frontend: `npm run dev` (Vite dev server)
   - Backend: `npm run dev` (Nodemon + ts-node)
   - Database: Local MongoDB instance

2. **Testing**
   - Unit tests for both frontend and backend
   - Integration tests for API endpoints
   - E2E tests for critical user flows

3. **Code Quality**
   - ESLint for code linting
   - Prettier for code formatting
   - TypeScript for type safety
   - Husky for pre-commit hooks

4. **Documentation**
   - API documentation
   - Component documentation
   - Setup instructions
   - Deployment guides
