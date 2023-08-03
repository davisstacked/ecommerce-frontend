import React from 'react';
import styles from './Advertisement.module.scss';
import Button from '../Button/Button';
import Image from 'next/image';

const Advertisement = () => {
  const {
    advertisement,
    text,
    title,
    image,
    percent,
    advertisementContainer,
    description,
    adCopy,
  } = styles;

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
        <div className={adCopy}>
          <div className={text}>
            <p className={percent}>{salePercentage}</p>
            <p className={title}>{saleTitle}</p>
            <p className={description}>{saleDescription}</p>
          </div>
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
            sizes='50vw'
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
