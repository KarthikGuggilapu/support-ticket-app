# Support Ticket Application - Backend

## Overview
This is the backend for the Support Ticket Application, built using Node.js, Express, and PostgreSQL. The backend provides RESTful API endpoints for managing support tickets, allowing users to create, view, and update tickets.

## Technologies Used
- Node.js
- Express
- PostgreSQL
- dotenv
- cors
- pg (node-postgres)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd support-ticket-app/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   PORT=5000
   ```

4. **Run the Server**
   ```bash
   npm start
   ```

5. **Access the API**
   The API will be running on `http://localhost:5000`. You can test the endpoints using tools like Postman or curl.

## API Endpoints

- **GET /**: Test endpoint to check if the API is running.
- **GET /tickets**: Retrieve a list of all tickets.
- **POST /tickets**: Create a new ticket. Requires `title` and `description` in the request body.
- **PUT /tickets/:id**: Update an existing ticket by ID. Requires `title`, `description`, and `status` in the request body.

## Folder Structure
- `server.js`: Entry point of the application.
- `routes/`: Contains route definitions for ticket-related endpoints.
- `controllers/`: Contains logic for handling requests and interacting with the database.
- `models/`: Defines the ticket model and database schema.

## License
This project is licensed under the MIT License.