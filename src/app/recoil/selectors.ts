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

export const discountSelector = selector({
  key: 'Discount',
  get: () => 6,
});

export const shippingSelector = selector({
  key: 'Shipping',
  get: () => 20,
});

export const totalSelector = selector({
  key: 'Total',
  get: ({ get }) => {
    const subtotal = get(subtotalSelector);
    const discount = get(discountSelector);
    const shipping = get(shippingSelector);
    const tax = get(taxSelector);
    return subtotal - discount + tax + shipping;
  },
});

