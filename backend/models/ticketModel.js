import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const getAllTickets = async () => {
  const result = await pool.query("SELECT * FROM tickets ORDER BY created_at DESC");
  return result.rows;
};

export const createTicket = async (title, description) => {
  const result = await pool.query(
    "INSERT INTO tickets (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  return result.rows[0];
};

export const updateTicket = async (id, updates) => {
  const { title, description, status } = updates;
  const result = await pool.query(
    "UPDATE tickets SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
    [title, description, status, id]
  );
  return result.rows[0];
};