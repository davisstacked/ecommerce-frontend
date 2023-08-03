'use client';
import React from 'react';
import styles from './ViewCartButton.module.scss';
import { Badge, Button } from 'antd';
import { useRecoilValue } from 'recoil';
import { shoppingCartState } from '../../recoil/atoms';
import Image from 'next/image';
import Link from 'next/link';

const ViewCartButton = () => {
  const shoppingCart = useRecoilValue(shoppingCartState);
  const itemsCount = shoppingCart.items.length;
  const { badge, button, buttonText } = styles;
  const cartIcon = {
    src: '/icons/cart.svg',
    alt: 'cart',
    width: 15.75,
    height: 18,
  };
  const viewCartLink = '/view-cart';
  const viewCartText = 'View Cart';

  return (
    <Link href={viewCartLink}>
      <Badge
        count={itemsCount}
        className={badge}
        offset={[-24, 18]}
        showZero={false}
        size='small'
      >
        <Button className={button}>
          <Image {...cartIcon} />
          <div className={buttonText}>{viewCartText}</div>
        </Button>
      </Badge>
    </Link>
  );
};

export default ViewCartButton;
