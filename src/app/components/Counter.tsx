import React, { FC } from 'react';

interface CounterProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export const Counter: FC<CounterProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => (
  <div>
    <button onClick={decrementQuantity}>-</button>
    <span>{quantity}</span>
    <button onClick={incrementQuantity}>+</button>
  </div>
);
