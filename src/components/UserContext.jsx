import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear un contexto para el nombre de usuario y el puntaje
const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [score, setScore] = useState(0); // Estado para el puntaje

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(Number(storedScore));
    }
  }, []);

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  const increaseScore = (points) => {
    setScore((prevScore) => {
      const newScore = prevScore + points;
      localStorage.setItem("score", newScore); // Guardamos el puntaje en localStorage
      return newScore;
    });
  };

  return (
    <UserContext.Provider value={{ username, score, updateUsername, increaseScore }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);
