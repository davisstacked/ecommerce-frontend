import { selector } from 'recoil';
import { shoppingCartState } from './atoms'; 

export const subtotalSelector = selector({
  key: 'Subtotal',
  get: ({ get }) => {
    const cart = get(shoppingCartState);
    return cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  },
});

export const taxSelector = selector({
  key: 'Tax',
  get: ({ get }) => {
    const subtotal = get(subtotalSelector);
    return subtotal * 0.095; 
  },
});

export const totalSelector = selector({
  key: 'Total',
  get: ({ get }) => {
    const subtotal = get(subtotalSelector);
    const tax = get(taxSelector);
    return subtotal + tax;
  },
});
