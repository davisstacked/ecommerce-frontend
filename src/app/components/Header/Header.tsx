import React, { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header: FC = () => {
  const { header, headerLogo, rightSide, headerContainer } = styles;
  return (
    <header className={header}>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <Image
            src='/icons/headerLogo.svg'
            alt='Sun Co. Logo'
            width={100}
            height={24}
          />
        </div>
    
          <button>
            <Image src='/icons/cart.svg' alt='cart' width={16} height={24} />
            View Cart
          </button>
 
      </div>
    </header>
  );
};

export default Header;
