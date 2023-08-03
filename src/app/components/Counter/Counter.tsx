import React, { FC } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export const Counter: FC<CounterProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { counter, button, quantity: quantityClass } = styles;

  return (
    <div className={counter}>
      <button className={button} onClick={decrementQuantity}>
        -
      </button>
      <span className={quantityClass}>{quantity}</span>
      <button className={button} onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
};
