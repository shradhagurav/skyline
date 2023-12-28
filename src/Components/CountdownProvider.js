import React, { createContext, useContext, useState, useEffect } from 'react';

const CountdownContext = createContext();

export const useCountdown = () => {
  return useContext(CountdownContext);
};

export const CountdownProvider = ({ children }) => {
  const [countdown, setCountdown] = useState(5 * 60);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setExit(true);
        }
        localStorage.setItem('countdown', prevCountdown - 1);
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContext.Provider value={{ countdown, exit, setExit }}>
      {children}
    </CountdownContext.Provider>
  );
};