import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { shoppingCartState } from '../recoil/atoms';
import { Button } from 'react-bootstrap';
import { Product } from '../interfaces';
import Link from 'next/link';

interface AddToCartProps {
  product: Product;
  quantity: number;
}

export const AddToCart: FC<AddToCartProps> = ({ product, quantity }) => {
  const [cart, setCart] = useRecoilState(shoppingCartState);

  const addToCart = () => {
    const cartItem = cart.items.find((item) => item.product.id === product.id);

    if (cartItem) {
      setCart({
        ...cart,
        items: cart.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      setCart({
        ...cart,
        items: [...cart.items, { product, quantity }],
      });
    }
  };

  return (
    <Link href='/view-cart'>
        <Button onClick={addToCart}>Add to Cart</Button>
    </Link>
  );
};
