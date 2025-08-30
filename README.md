# Support Ticket Application

This is a full-stack web application for managing support tickets. It allows users to create, view, and update support tickets. The application is built using React.js for the frontend and Node.js with Express for the backend, with SQLite as the database and Prisma as the ORM.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: SQLite
- **ORM**: Prisma

## Features

- Users can create new support tickets.
- Users can view a list of all support tickets.
- Users can update the status of existing tickets.
- Mobile-first responsive design for optimal user experience on all devices.

## Project Structure

```
support-ticket-app
├── backend
│   ├── server.js
│   ├── routes
│   │   └── tickets.js
│   ├── controllers
│   │   └── ticketsController.js
│   ├── prisma
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── dev.db
│   ├── lib
│   │   └── prisma.js
│   ├── .env
│   ├── .env.example
│   ├── vercel.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── TicketList.js
│   │   │   ├── TicketForm.js
│   │   │   └── TicketUpdate.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   └── TicketDetail.js
│   │   ├── services
│   │   │   └── api.js
│   │   └── styles
│   │       └── App.css
│   ├── public
│   │   └── index.html
│   ├── .env.production
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

## Deployment

### Deployment on Render (Recommended for Demo)

1. Push your code to GitHub

2. Go to [Render.com](https://render.com) and create an account

3. Click "New +" and select "Blueprint"

4. Connect your GitHub repository

5. Render will automatically detect the `render.yaml` configuration and set up both services:
   - Backend API service
   - Frontend static site

The deployment will automatically:
- Set up the Node.js environment
- Install dependencies
- Generate Prisma client
- Create and migrate the SQLite database
- Build and serve the frontend

Your app will be available at:
- Frontend: `https://support-ticket-frontend.onrender.com`
- Backend: `https://support-ticket-backend.onrender.com`

Note: Render's free tier is perfect for demos as it maintains filesystem persistence between deployments, which works well with SQLite.

## Additional Notes

- The application uses SQLite for simplicity and ease of setup
- No additional database setup is required as SQLite is file-based
- The application is designed to be responsive and optimized for mobile devices
- For production deployment, consider using a persistent database service