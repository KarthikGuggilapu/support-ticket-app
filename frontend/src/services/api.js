import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

export const fetchTickets = async () => {
  const response = await axios.get(`${API_URL}/tickets`);
  return response.data;
};

export const createTicket = async (ticketData) => {
  const response = await axios.post(`${API_URL}/tickets`, ticketData);
  return response.data;
};

export const updateTicket = async (ticketId, updatedData) => {
  const response = await axios.put(`${API_URL}/tickets/${ticketId}`, updatedData);
  return response.data;
};