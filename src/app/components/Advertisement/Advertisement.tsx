import React from 'react';
import styles from './Advertisement.module.scss';
import Button from '../Button/Button';
import Image from 'next/image';

const Advertisement = () => {
  const { advertisement, title, image, percent, description, adCopy } = styles;

  const salePercentage = '25% Off';
  const saleTitle = 'Summer Sale';
  const saleDescription = 'Discover our summer styles with discount';
  const buttonText = 'Shop Now';
  const buttonIconSrc = '/icons/rightArrow.svg';
  const imageSrc = '/images/mainShoe.svg';
  const imageAlt = '25% Off Summer Sale Advertisement';

  return (
    <div className={advertisement}>
      <div className={adCopy}>
        <p className={percent}>{salePercentage}</p>
        <p className={title}>{saleTitle}</p>
        <p className={description}>{saleDescription}</p>
        <Button
          text={buttonText}
          width={90}
          height={3.5}
          iconSrc={buttonIconSrc}
        />
      </div>
      <div className={image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          priority={true}
          width={490}
          height={321}
          sizes='(max-width: 767px) 200px, (max-width: 1024px) 300px, (max-width: 1280px) 500px, (max-width: 1536px) 600px'
        />
      </div>
    </div>
  );
};

export default Advertisement;
