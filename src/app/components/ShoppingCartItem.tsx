import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { shoppingCartState } from '../recoil/atoms';
import { Counter } from './Counter';
import { ShoppingCartItem } from '../interfaces';

interface CartItemProps {
  item: ShoppingCartItem;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const [cart, setCart] = useRecoilState(shoppingCartState);

  const removeItem = () => {
    setCart({
      ...cart,
      items: cart.items.filter((i) => i.product.id !== item.product.id),
    });
  };

  const incrementQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((i) =>
        i.product.id === item.product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    });
  };

  const decrementQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((i) =>
        i.product.id === item.product.id
          ? { ...i, quantity: Math.max(0, i.quantity - 1) }
          : i
      ),
    });
  };

  return (
    <div>
      <img src={item.product.images[0]} alt={item.product.name} />
      <div>
        <div>
          <span>{item.product.brand}</span>
          <span>{item.product.price}</span>
        </div>
        <div>
          <span>{item.product.name}</span>
        </div>
        <div>
          <Counter
            quantity={item.quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <Button onClick={removeItem}>Remove</Button>
        </div>
      </div>
    </div>
  );
};
