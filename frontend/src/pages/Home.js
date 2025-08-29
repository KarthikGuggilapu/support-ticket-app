import React, { useEffect, useState } from 'react';
import TicketList from '../components/TicketList';
import TicketForm from '../components/TicketForm';

const Home = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const response = await fetch('/tickets');
    const data = await response.json();
    setTickets(data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="home">
      <h1>Support Ticket System</h1>
      <TicketForm onTicketCreated={fetchTickets} />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default Home;