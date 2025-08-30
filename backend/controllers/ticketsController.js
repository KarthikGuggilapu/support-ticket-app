import { prisma } from '../lib/prisma.js';

export const getTickets = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
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
    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority,
        status: 'open'
      }
    });
    console.log('Ticket created successfully:', ticket);
    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ 
      error: "Internal server error",
      details: error.message
    });
  }
};

export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority } = req.body;

  try {
    const ticket = await prisma.ticket.update({
      where: { id: parseInt(id) },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(status && { status }),
        ...(priority && { priority })
      }
    });
    res.json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTicket = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.ticket.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting ticket:", error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
