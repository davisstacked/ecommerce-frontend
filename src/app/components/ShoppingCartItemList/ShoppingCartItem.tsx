import React, { FC } from 'react';
// import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { shoppingCartState } from '../../recoil/atoms';
import { Counter } from '../Counter';
import { ShoppingCartItem } from '../../interfaces';
import Image from 'next/image';
import styles from './ShoppingCartItem.module.scss';

interface CartItemProps {
  item: ShoppingCartItem;
}

const ShoppingCartItem: FC<CartItemProps> = ({ item }) => {
  const [cart, setCart] = useRecoilState(shoppingCartState);
  const {
    ShoppingCartItem,
    image,
    divider,
    details,
    topDetails,
    brand,
    price,
    productName,
    counterRemoveContainer,
    removeButton,
    brandAndName
  } = styles;

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
    <div className={ShoppingCartItem}>
      <div className={image}>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          width={165}
          height={166}
        />
      </div>
      <div className={details}>
        <div className={topDetails}>
          <div className={brandAndName}>
            <span className={brand}>{item.product.brand}</span>
            <div className={productName}>
              <span>{item.product.name}</span>
            </div>
          </div>
          <span className={price}>${item.product.price}</span>
        </div>
        <div className={counterRemoveContainer}>
          <Counter
            quantity={item.quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button className={removeButton} onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;