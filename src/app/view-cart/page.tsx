'use client';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  subtotalSelector,
  taxSelector,
  totalSelector,
} from '../recoil/selectors';
import { shoppingCartState } from '../recoil/atoms';
import ShoppingCartItem from '../components/ShoppingCartItemList/ShoppingCartItem';
import Link from 'next/link';

const ShoppingCart: FC = () => {
  const cartItems = useRecoilValue(shoppingCartState);
  const subtotal = useRecoilValue(subtotalSelector);
  const tax = useRecoilValue(taxSelector);
  const total = useRecoilValue(totalSelector);

  return (
    <div>
      <h1>Your Bag</h1>
      <div>
        {cartItems.items.map((item) => (
          <ShoppingCartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div>
        <h1>Summary</h1>
        <div>Subtotal: {subtotal.toFixed(2)}</div>
        <div>Shipping and Delivery: 20</div>
        <div>Tax: {tax.toFixed(2)}</div>
        <div>Discount: 6</div>
        <div>Total: {total.toFixed(2)}</div>
        <button>Checkout</button>
        <Link href='/'>Home</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
