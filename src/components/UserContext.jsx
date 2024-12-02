import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear un contexto para el nombre de usuario
const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        setUsername(storedUsername);
    }
  }, []);

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <UserContext.Provider value={{ username, updateUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);
