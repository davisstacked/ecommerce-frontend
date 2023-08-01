import React from 'react';
import styles from './Advertisement.module.scss';
import Button from '../Button/Button';
import Image from 'next/image';

const Advertisement = () => {

  const { advertisement, text, image } = styles;

  return (
    <div className={advertisement}>
      <div className={text}>
        <h2>25% Off</h2>
        <h1>Summer Sale</h1>
        <h6>Discover our summer styles with discount</h6>
        <div>
          <Button
            text='Shop Now'
            width={283}
            height={64}
            iconSrc='/icons/rightArrow.svg'
          />
        </div>
      </div>
      <div className={image}>
        <Image
          src='/images/mainShoe.svg'
          alt='hero shoe'
          width={490}
          height={321}
        />
      </div>
    </div>
  );
}

export default Advertisement;
