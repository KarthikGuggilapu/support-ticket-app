import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../services/api';
import './TicketList.css'; // Assuming you have a CSS file for styling

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTickets();
  }, []);

  if (loading) return <div>Loading tickets...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ticket-list">
      <h2>Support Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id} className="ticket-item">
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;