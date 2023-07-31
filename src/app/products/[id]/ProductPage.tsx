'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { Product } from '../../interfaces';
import styles from './ProductPage.module.scss';

interface ProductPageProps {
  product: Product;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  
  return (
    <div className={styles.productPage}>
      <div className={styles.image}>
        <Image
          src={product.images[0]}
          alt={product.alt}
          width={500}
          height={500}
        />
      <div className={styles.details}>
        <div className={styles.brand}>{product.brand}</div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>
          ${product.price.toFixed(2).replace(/\.00$/, '')}
        </div>
      </div>
      <div className={styles.description}>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
