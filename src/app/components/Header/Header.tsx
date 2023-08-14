import React, { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ViewCartButton from '../ViewCartButton/ViewCartButton';

const Header: FC = () => {
  const { header, headerLogo, viewCartButton, headerContainer, buttonText } = styles;
  return (
    <header className={header}>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <Link href='/'>
            <Image
              src='/icons/headerLogo.svg'
              alt='Sun Co. Logo'
              width={100}
              height={24}
            />
          </Link>
        </div>
        <ViewCartButton />
      </div>
    </header>
  );
};

export default Header;
