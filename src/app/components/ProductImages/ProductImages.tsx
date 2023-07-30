import React, { FC, useState } from 'react';
import Image from 'next/image';
import { ProductState } from '../../interfaces';
import styles from './ProductImages.module.scss';

const ProductImages: FC<ProductState> = ({ products }) => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const handleScrollLeft = () => {
  };

  const handleScrollRight = () => {
  };

  return (
    <div className={styles.productImages}>
      <div
        className={`${styles.productContainer} ${
          showScrollButtons ? styles.scrollable : ''
        }`}
      >
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <div className={styles.imageContainer}>
              <Image
                src={product.images[0]}
                alt={product.alt}
                width={261}
                height={284}
              />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.brand}>{product.brand}</div>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.price}>
                ${product.price.toFixed(2).replace(/\.00$/, '')}
              </div>
            </div>
            <div className={styles.border} />
          </div>
        ))}
      </div>
      {showScrollButtons && (
        <div className={styles.buttons}>
          <button className={styles.scrollButton} onClick={handleScrollLeft}>
            &lt;
          </button>
          <button className={styles.scrollButton} onClick={handleScrollRight}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductImages;