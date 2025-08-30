import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const mockUsers = [
  { id: 1, email: 'user@example.com', password: 'password123', name: 'Demo User' },
  { id: 2, email: 'admin@example.com', password: 'admin123', name: 'Admin User' }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
