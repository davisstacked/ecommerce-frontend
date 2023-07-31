'use client';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  subtotalSelector,
  taxSelector,
  totalSelector,
} from '../recoil/selectors';
import { shoppingCartState } from '../recoil/atoms';
import { CartItem } from '../components/ShoppingCartItem';

const ShoppingCart: FC = () => {
  const cartItems = useRecoilValue(shoppingCartState);
  const subtotal = useRecoilValue(subtotalSelector);
  const tax = useRecoilValue(taxSelector);
  const total = useRecoilValue(totalSelector);

  return (
    <div>
      <div>
        {cartItems.items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div>
        <div>Subtotal: {subtotal.toFixed(2)}</div>
        <div>Shipping and Delivery: 20</div>
        <div>Tax: {tax.toFixed(2)}</div>
        <div>Discount: 6</div>
        <div>Total: {total.toFixed(2)}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;