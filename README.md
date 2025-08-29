# Support Ticket Application

This is a full-stack web application for managing support tickets. It allows users to raise, view, and update support tickets. The application is built using React.js for the frontend and Node.js with Express for the backend, with PostgreSQL as the database and Supabase for database management.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Database Management**: Supabase

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

### Backend

1. Navigate to the `backend` directory.
2. Create a `.env` file and add your database connection string.
3. Install dependencies using `npm install`.
4. Start the server with `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the React application with `npm start`.

## Additional Notes

- Ensure that PostgreSQL is running and accessible.
- Use Supabase for managing your database and handling authentication if needed.
- The application is designed to be responsive and optimized for mobile devices.