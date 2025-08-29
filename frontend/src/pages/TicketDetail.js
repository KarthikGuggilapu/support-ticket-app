import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from '../services/api';

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTicket = async () => {
      try {
        const tickets = await api.fetchTickets();
        const ticket = tickets.find(t => t.id === id);
        if (ticket) {
          setTicket(ticket);
        }
      } catch (error) {
        console.error('Error fetching ticket:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTicket();
  }, [id]);

  const handleUpdate = async (status) => {
    try {
      await api.updateTicket(id, { ...ticket, status });
      setTicket({ ...ticket, status });
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ticket) {
    return <div>Ticket not found.</div>;
  }

  return (
    <div className="ticket-detail">
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <button onClick={() => handleUpdate('In Progress')}>Mark as In Progress</button>
      <button onClick={() => handleUpdate('Resolved')}>Mark as Resolved</button>
      <button onClick={handleBack}>Back to Tickets</button>
    </div>
  );
};

export default TicketDetail;