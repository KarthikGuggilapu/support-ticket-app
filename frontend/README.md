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

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database set up and running.
- Supabase account for database management.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd support-ticket-app
   ```

2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your database connection string:
   ```
   DATABASE_URL=your_database_connection_string
   PORT=5000
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node server.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- `GET /tickets`: Retrieve all tickets.
- `POST /tickets`: Create a new ticket.
- `PUT /tickets/:id`: Update an existing ticket.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.