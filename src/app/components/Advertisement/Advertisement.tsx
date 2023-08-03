import React from 'react';
import styles from './Advertisement.module.scss';
import Button from '../Button/Button';
import Image from 'next/image';

const Advertisement = () => {
  const { advertisement, text, image, advertisementContainer } = styles;

  const salePercentage = '25% Off';
  const saleTitle = 'Summer Sale';
  const saleDescription = 'Discover our summer styles with discount';
  const buttonText = 'Shop Now';
  const buttonIconSrc = '/icons/rightArrow.svg';
  const imageSrc = '/images/mainShoe.svg';
  const imageAlt = '25% Off Summer Sale Advertisement';

  return (
    <div className={advertisement}>
      <div className={advertisementContainer}>
        <div className={text}>
          <h2>{salePercentage}</h2>
          <h1>{saleTitle}</h1>
          <h6>{saleDescription}</h6>
            <Button
              text={buttonText}
              width={100}
              height={4}
              iconSrc={buttonIconSrc}
            />
        </div>
        <div className={image}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={490}
            height={321}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
