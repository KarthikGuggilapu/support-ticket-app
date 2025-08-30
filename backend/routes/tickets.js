import express from "express";
import { createTicket, getTickets, updateTicket, deleteTicket } from "../controllers/ticketsController.js";

const router = express.Router();

// Route to get all tickets
router.get("/", getTickets);

// Route to create a new ticket
router.post("/", createTicket);

// Route to update an existing ticket
router.put("/:id", updateTicket);

// Route to delete a ticket
router.delete("/:id", deleteTicket);

export default router;
