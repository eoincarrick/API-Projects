import React, { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export const ApiDataContext = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const baseURL = 'https://quotes15.p.rapidapi.com/quotes/random/';

  const getQuotes = async () => {
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        'X-RapidAPI-Key': 'f01687c65emsheaaef840bfca25dp1de079jsn9678bec10359',
      },
    });

    const data = await response.json();
    console.log(data);
    setQuotes(data);
  };

  console.log(quotes);
  return (
    <DataContext.Provider value={{ quotes, getQuotes }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
