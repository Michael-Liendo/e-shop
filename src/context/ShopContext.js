import { createContext, useContext, useState } from 'react';

export const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState('');

  return (
    <ShopContext.Provider value={{ searchForm, setSearchForm }}>
      {children}
    </ShopContext.Provider>
  );
};
