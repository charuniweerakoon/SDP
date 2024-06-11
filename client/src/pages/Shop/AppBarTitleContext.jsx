import React, { createContext, useState } from 'react';

const AppBarTitleContext = createContext();

const AppBarTitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Dashboard'); // Default title

  return (
    <AppBarTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </AppBarTitleContext.Provider>
  );
};

export { AppBarTitleContext, AppBarTitleProvider };
