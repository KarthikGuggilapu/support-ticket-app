import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTickets } from '../services/api';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-300',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  low: 'bg-green-100 text-green-800 border-green-300'
};

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadTickets();
  }, [user, navigate]);

  const loadTickets = async () => {
    try {
      const data = await fetchTickets();
      setTickets(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading tickets:', error);
      setLoading(false);
    }
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedAndFilteredTickets = [...tickets]
    .filter(ticket => filter === 'all' || ticket.priority === filter)
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === 'priority') {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortField === 'createdAt') {
        comparison = new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        comparison = a[sortField].localeCompare(b[sortField]);
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  const SortIcon = ({ field }) => {
    if (field !== sortField) return <FunnelIcon className="h-4 w-4" />;
    return sortDirection === 'asc' ?
      <ChevronUpIcon className="h-4 w-4" /> :
      <ChevronDownIcon className="h-4 w-4" />;
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
        <div className="flex gap-4">
          <select
            className="form-select rounded-md border-gray-300"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <button
            onClick={() => navigate('/create')}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            New Ticket
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200">
          <div
            className="col-span-4 flex items-center cursor-pointer"
            onClick={() => handleSort('title')}
          >
            <span className="font-medium">Title</span>
            <SortIcon field="title" />
          </div>
          <div
            className="col-span-3 flex items-center cursor-pointer"
            onClick={() => handleSort('priority')}
          >
            <span className="font-medium">Priority</span>
            <SortIcon field="priority" />
          </div>
          <div
            className="col-span-3 flex items-center cursor-pointer"
            onClick={() => handleSort('status')}
          >
            <span className="font-medium">Status</span>
            <SortIcon field="status" />
          </div>
          <div
            className="col-span-2 flex items-center cursor-pointer"
            onClick={() => handleSort('createdAt')}
          >
            <span className="font-medium">Created</span>
            <SortIcon field="createdAt" />
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {sortedAndFilteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => navigate(`/ticket/${ticket.id}`)}
            >
              <div className="col-span-4">
                <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                <p className="text-sm text-gray-500 truncate">{ticket.description}</p>
              </div>
              <div className="col-span-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
                  {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                </span>
              </div>
              <div className="col-span-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                </span>
              </div>
              <div className="col-span-2 text-sm text-gray-500">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
