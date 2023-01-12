import { create } from 'zustand';

export const useShopStore = create((set) => ({
  searchForm: '',
  setSearchForm: (value) =>
    set({
      searchForm: value,
    }),
}));

export const useCart = create((set, get) => ({
  cart: [],
  cartAnimated: false,
  setCart: (value) =>
    set(() => ({
      cart: value,
    })),
  setCartAnimated: (value) => {
    set(() => ({
      cartAnimated: value,
    }));
  },
  addProduct: (product) => {
    const { cart } = get();

    const index = cart.findIndex(({ id }) => id === product.id);

    if (index < 0) {
      set({ cart: [...cart, product] });
    } else {
      cart[index].quantity += 1;
    }
  },
  removeProduct: (productIndex) => {
    const { cart } = get();
    set({
      cart: cart.filter((value, index) => index !== productIndex),
    });
  },
}));
