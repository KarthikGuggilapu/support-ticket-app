import postgres from 'postgres';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Direct database connection configuration for Supabase
const sql = postgres(process.env.DATABASE_URL, {
  max: 1, // Limit connections for direct database access
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require'
  }
});

// Initialize database table
const initDatabase = async () => {
  try {
    console.log('Attempting to connect to Supabase database...');
    
    // First, test the basic connection
    const connectionTest = await sql`SELECT 1`;
    console.log('Basic connection test successful');

    // Then check if we can query the database
    const currentTime = await sql`SELECT NOW()`;
    console.log('Database query test successful. Server time:', currentTime[0].now);

    // Now try to initialize the table
    console.log('Initializing tickets table...');
    await sql`
      CREATE TABLE IF NOT EXISTS tickets (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'open',
        priority VARCHAR(50),
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Tickets table initialized successfully');

    // Test if we can insert and query data
    const testResult = await sql`
      INSERT INTO tickets (title, description, priority)
      VALUES ('Test Ticket', 'Testing database connection', 'low')
      RETURNING id
    `;
    console.log('Test insert successful. ID:', testResult[0].id);

    // Clean up test data
    await sql`DELETE FROM tickets WHERE title = 'Test Ticket'`;
    console.log('Database initialization completed successfully');
    
  } catch (error) {
    console.error('Database initialization error:', {
      message: error.message,
      code: error.code,
      detail: error.detail || 'No additional details available'
    });
    
    if (error.code === 'ECONNREFUSED') {
      console.log('Connection refused. Please check:');
      console.log('1. Your Supabase database is active');
      console.log('2. The database URL is correct');
      console.log('3. Database credentials are correct');
    }
  }
};

// Initialize the database on startup
initDatabase();

export const getTickets = async (req, res) => {
  try {
    const tickets = await sql`
      SELECT * FROM tickets 
      ORDER BY created_at DESC
    `;
    res.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createTicket = async (req, res) => {
  const { title, description, priority } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    console.log('Creating ticket with data:', { title, description, priority });
    const [ticket] = await sql`
      INSERT INTO tickets (title, description, priority)
      VALUES (${title}, ${description}, ${priority})
      RETURNING *
    `;
    console.log('Ticket created successfully:', ticket);
    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      detail: error.detail
    });
    res.status(500).json({ 
      error: "Internal server error",
      details: error.message
    });
  }
};

export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const [ticket] = await sql`
      UPDATE tickets 
      SET title = ${title}, description = ${description}
      WHERE id = ${id}
      RETURNING *
    `;
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
