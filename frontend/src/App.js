import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TicketDetail from './pages/TicketDetail';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import TicketUpdate from './components/TicketUpdate';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Support Ticket System</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/new" element={<TicketForm />} />
          <Route path="/tickets/:id" element={<TicketDetail />} />
          <Route path="/tickets/update/:id" element={<TicketUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;