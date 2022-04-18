import React, { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export const ApiDataContext = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const URL = process.env.QUOTES_URL_API;

  try {
    const getQuotes = async () => {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': process.env.QUOTES_HOST_API,
          'X-RapidAPI-Key': process.env.QUOTES_API,
        },
      });

      const data = await response.json();
      setQuotes(data);
    };
  } catch (error) {
    console.log(error);
  }

  return (
    <DataContext.Provider
      value={{
        quotes,
        getQuotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
