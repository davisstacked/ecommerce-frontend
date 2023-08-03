import React, { FC } from 'react';
import { useRecoilCallback } from 'recoil';
import { shoppingCartState } from '../../recoil/atoms';
import { Product } from '../../interfaces';
import Button from '../Button/Button';
import Link from 'next/link';
import './AddToCartButton.css';

interface AddToCartProps {
  product: Product;
  quantity: number;
}

const AddToCartButton: FC<AddToCartProps> = ({ product, quantity }) => {
  const addToCart = useRecoilCallback(({ snapshot, set }) => () => {
    const cart = snapshot.getLoadable(shoppingCartState).getValue();
    const cartItem = cart.items.find((item) => item.product.id === product.id);

    if (cartItem) {
      set(shoppingCartState, {
        ...cart,
        items: cart.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set(shoppingCartState, {
        ...cart,
        items: [...cart.items, { product, quantity }],
      });
    }
  });

  return (
    <Link className="addToCart" href='/view-cart'>
      <Button text='Add to Cart' height={3.75} width={100} onClick={addToCart} />
    </Link>
  );
};

export default AddToCartButton;
