import { createContext, useContext, useState } from 'react';

export const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState('');
  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider value={{ searchForm, setSearchForm, cart, setCart }}>
      {children}
    </ShopContext.Provider>
  );
};
