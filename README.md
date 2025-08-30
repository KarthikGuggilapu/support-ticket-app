# Support Ticket System

A modern, full-stack web application for managing support tickets with authentication. Built with React on the frontend and Node.js/Express on the backend, using SQLite database with Prisma ORM.

## 🚀 Tech Stack

### Frontend
- **React.js** - UI Framework
- **React Router** - Client-side routing
- **Tailwind CSS CDN** - Utility-first CSS framework
- **Bootstrap CDN** - CSS framework for components
- **Lucide Icons** - Modern icon library

### Backend
- **Node.js** with Express.js - Server framework
- **SQLite** - Database (file-based, no setup required)
- **Prisma** - ORM for database operations
- **CORS** - Cross-origin resource sharing

## ✨ Features

- 🔐 **User Authentication** - Login system with demo credentials
- 📝 **Create Support Tickets** - Submit new support requests with priority levels
- 📋 **View Ticket List** - Browse all tickets with sorting and filtering
- 🔍 **Search & Filter** - Filter by status and priority
- 📊 **Ticket Management** - Update ticket status and details
- 📱 **Responsive Design** - Optimized for mobile and desktop
- 🎨 **Modern UI** - Clean interface using CDN-based styling

## 🏗️ Project Structure

```
support-ticket-app/
├── backend/
│   ├── controllers/
│   │   └── ticketsController.js     # CRUD operations
│   ├── routes/
│   │   └── tickets.js              # API routes
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema
│   │   ├── dev.db                 # SQLite database file
│   │   └── migrations/            # Prisma migrations
│   ├── lib/
│   │   └── prisma.js              # Database connection
│   ├── server.js                  # Main server file
│   ├── package.json
│   └── .env                       # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html             # HTML template (CDN links included)
│   ├── src/
│   │   ├── components/
│   │   │   ├── TicketList.js      # Main ticket display
│   │   │   ├── TicketForm.js      # Create new tickets
│   │   │   └── TicketUpdate.js    # Edit existing tickets
│   │   ├── context/
│   │   │   └── AuthContext.js     # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.js           # Login page
│   │   │   └── TicketDetail.js    # Individual ticket view
│   │   ├── services/
│   │   │   └── api.js             # API communication
│   │   ├── App.js                 # Main app component
│   │   └── index.js               # React entry point
│   └── package.json
├── README.md
├── render.yaml                   # Deployment configuration
└── .gitignore
```

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **Git** (for cloning the repository)
- **npm** or **yarn** (package manager)

## 🚀 Quick Start

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on http://localhost:5001

### Frontend Setup

1. **Open new terminal and navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm start
   ```
   The app will open at http://localhost:3000

## 🎯 Demo Credentials

Use these credentials to test the application:

- **Email:** `user@example.com`
- **Password:** `password123`

## 🔧 API Endpoints

### Tickets API
- `GET /api/tickets` - Get all tickets
- `POST /api/tickets` - Create new ticket
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket

### Request/Response Examples

**Create Ticket:**
```json
POST /api/tickets
{
  "title": "Cannot access dashboard",
  "description": "Getting error 404 when trying to access dashboard",
  "priority": "high"
}
```

**Update Ticket:**
```json
PUT /api/tickets/1
{
  "status": "in-progress",
  "priority": "medium"
}
```

## 🎨 UI Design

### Frontend Features
- **CDN-Based Styling** - No complex build setup needed
- **Responsive Layout** - Works on all device sizes
- **Modern Components** - Clean cards, forms, and buttons
- **Interactive Elements** - Sorting, filtering, hover effects
- **Color-Coded Priorities** - Visual priority indicators

### Key Components
1. **Login Page** - Authentication with form validation
2. **Ticket List** - Sortable/filterable table view
3. **Ticket Form** - Clean form for creating new tickets
4. **Navigation** - Protected routes and routing

## 🗄️ Database Schema

The application uses a single `tickets` table with the following fields:

```sql
model Ticket {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  status      String   @default("open")
  priority    String?
  createdAt   DateTime @default(now()) @map("created_at")

  @@map("tickets")
}
```

## 📦 Dependencies

### Backend Dependencies
- `express` - Web framework
- `@prisma/client` - Database ORM
- `prisma` - Database toolkit
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Frontend Dependencies
- **React Core dependencies only:**
  - `react` & `react-dom` - React library
  - `react-router-dom` - Routing
  - `axios` - HTTP client
- **All styling via CDN:**
  - Tailwind CSS (`https://cdn.tailwindcss.com`)
  - Bootstrap CSS (`https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css`)
  - Lucide Icons (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`)

## 🚀 Deployment

### Option 1: Deploy on Render (Recommended)

1. **Push code to GitHub**
2. **Go to Render.com**
3. **Create new Blueprint** and connect your repository
4. **Render will auto-detect `render.yaml`** and deploy both services

### Option 2: Manual Deployment

**Backend Deployment:**
- Deploy to services like Heroku, Railway, or Vercel
- Deploy on port 5001 (or set via PORT environment variable)
- Database will be created automatically with Prisma

**Frontend Deployment:**
- Deploy to Vercel, Netlify, or any static hosting
- Build with `npm run build`
- Serve the `build` folder

## 🐛 Troubleshooting

### Common Issues

**Port 5001 already in use:**
```bash
# Find process using port
netstat -ano | findstr :5001
# Kill the process
taskkill /PID <PID> /F
```

**Database issues:**
```bash
cd backend
# Reset database
npx prisma migrate reset
```

**Frontend build errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm start --reset-cache`

## 📝 Development

### Adding New Features
1. Create components in `frontend/src/components/`
2. Add API routes in `backend/routes/`
3. Update database schema in `backend/prisma/schema.prisma`
4. Run migrations: `npx prisma migrate dev`

### Code Style
- Use functional components with hooks
- Follow consistent naming conventions
- Add error handling for API calls
- Keep components small and focused
