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

    return (
      <Link href='/view-cart'>
          <Badge
            count={itemsCount}
            className={styles.badge}
            offset={[-24, 18]}
            showZero={false}
          >
            <Button className={styles.button}>
              <Image
                src='/icons/cart.svg'
                alt='cart'
                width={15.75}
                height={18}
              />
              <div className={styles.buttonText}>View Cart</div>
            </Button>
          </Badge>
      </Link>
    );
};

export default ViewCartButton;
