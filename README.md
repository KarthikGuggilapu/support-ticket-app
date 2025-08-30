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
│   ├── models
│   │   └── ticketModel.js
│   ├── .env
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
│   ├── package.json
│   └── README.md
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

### Backend Deployment (Vercel)

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your GitHub repository
4. The project will automatically deploy

Note: The SQLite database will be created fresh on each deployment since Vercel has an ephemeral filesystem. This is suitable for demonstration purposes, but for production, consider using a persistent database service.

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Create a new project on Vercel
3. Add the following environment variable:
   - `REACT_APP_API_URL`: Your backend API URL (e.g., https://your-backend.vercel.app/api)
4. Deploy the project

## Additional Notes

- The application uses SQLite for simplicity and ease of setup
- No additional database setup is required as SQLite is file-based
- The application is designed to be responsive and optimized for mobile devices
- For production deployment, consider using a persistent database service