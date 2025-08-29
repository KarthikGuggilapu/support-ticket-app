import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from '../services/api';

const TicketUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({ title: '', description: '', status: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTicket = async () => {
      try {
        const tickets = await api.fetchTickets();
        const ticket = tickets.find(t => t.id === id);
        if (ticket) {
          setTicket(ticket);
        } else {
          setError('Ticket not found');
        }
      } catch (err) {
        setError('Error fetching ticket details');
      } finally {
        setLoading(false);
      }
    };

    loadTicket();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.updateTicket(id, ticket);
      navigate(`/tickets/${id}`);
    } catch (err) {
      setError('Error updating ticket');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Update Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={ticket.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={ticket.status}
            onChange={handleChange}
            required
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default TicketUpdate;