import React from 'react';
import styles from './Advertisement.module.scss';
import Button from '../Button/Button';
import Image from 'next/image';

const Advertisement = () => {
  const { advertisement, text, image } = styles;

  const salePercentage = '25% Off';
  const saleTitle = 'Summer Sale';
  const saleDescription = 'Discover our summer styles with discount';
  const buttonText = 'Shop Now';
  const buttonIconSrc = '/icons/rightArrow.svg';
  const imageSrc = '/images/mainShoe.svg';
  const imageAlt = '25% Off Summer Sale Advertisement';

  return (
    <div className={advertisement}>
      <div className={text}>
        <h2>{salePercentage}</h2>
        <h1>{saleTitle}</h1>
        <h6>{saleDescription}</h6>
        <div>
          <Button
            text={buttonText}
            width={17.69}
            height={4}
            iconSrc={buttonIconSrc}
          />
        </div>
      </div>
      <div className={image}>
        <Image src={imageSrc} alt={imageAlt} width={490} height={321} />
      </div>
    </div>
  );
};

export default Advertisement;
