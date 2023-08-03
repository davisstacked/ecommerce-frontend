'use client';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  subtotalSelector,
  taxSelector,
  totalSelector,
  discountSelector,
  shippingSelector,
} from '../recoil/selectors';
import { shoppingCartState } from '../recoil/atoms';
import ShoppingCartItem from '../components/ShoppingCartItemList/ShoppingCartItem';
import Link from 'next/link';
import styles from './ShoppingCart.module.scss';
import Button from '../components/Button/Button';

const ShoppingCart: FC = () => {
  const cartItems = useRecoilValue(shoppingCartState);
  const subtotal = useRecoilValue(subtotalSelector);
  const tax = useRecoilValue(taxSelector);
  const total = useRecoilValue(totalSelector);
  const discount = useRecoilValue(discountSelector);
  const shipping = useRecoilValue(shippingSelector);
  const buttonIconSrc = '/icons/rightArrow.svg';
  const {
    shoppingCartPage,
    cartItemList,
    cartItem,
    summaryContainer,
    summaryWrapper,
    summaryItem,
    yourBag,
  } = styles;

  return (
    <div className={shoppingCartPage}>
      <div className={yourBag}>
        <h1>Your Bag</h1>
        <div className={cartItemList}>
          {cartItems.items.map((item) => (
            <div className={cartItem} key={item.product.id}>
              <ShoppingCartItem item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={summaryContainer}>
        <div className={summaryWrapper}>
          <div className={summaryItem}>
            <h1>Summary</h1>
            <div></div>
          </div>
          <div className={summaryItem}>
            <div>Subtotal:</div> <div>{subtotal.toFixed(2)}</div>
          </div>
          <div className={summaryItem}>
            <div>Shipping and Delivery:</div> <div>{shipping.toFixed(2)}</div>
          </div>
          <div className={summaryItem}>
            <div>Tax:</div>
            <div>{tax.toFixed(2)}</div>
          </div>
          <div className={summaryItem}>
            <div>Discount:</div>
            <div>{discount.toFixed(2)}</div>
          </div>
          <div className={summaryItem}>
            <div>Total:</div> <div>{total.toFixed(2)}</div>
          </div>
          <Button
            text='Checkout'
            width={100}
            height={3.75}
            iconSrc={buttonIconSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
