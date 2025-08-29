import express from "express";
import { createTicket, getTickets, updateTicket } from "../controllers/ticketsController.js";

const router = express.Router();

// Route to get all tickets
router.get("/", getTickets);

// Route to create a new ticket
router.post("/", createTicket);

// Route to update an existing ticket
router.put("/:id", updateTicket);

export default router;