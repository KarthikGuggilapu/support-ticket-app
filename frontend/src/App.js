import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import TicketUpdate from './components/TicketUpdate';
import { AuthProvider, useAuth } from './context/AuthContext';


function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            } />
            <Route path="/create" element={
              <PrivateRoute>
                <TicketForm />
              </PrivateRoute>
            } />
            <Route path="/ticket/:id" element={
              <PrivateRoute>
                <TicketDetail />
              </PrivateRoute>
            } />
            <Route path="/ticket/edit/:id" element={
              <PrivateRoute>
                <TicketUpdate />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
      

export default App;
