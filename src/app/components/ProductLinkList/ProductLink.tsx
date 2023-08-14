import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../interfaces';
import styles from './ProductLink.module.scss';

interface ProductPageLinkProps {
  product: Product;
}

const ProductPageLink: FC<ProductPageLinkProps> = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <Link href={`/Products/${product.id}`}>
        <div className={styles.imageContainer}>
          <Image
            src={product.images[0]}
            alt={product.alt}
            width={261}
            height={284}
            sizes='(max-width: 767px) 200px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, (min-width: 1281px) 600px'
          />
        </div>
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.brand}>{product.brand}</div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>
          ${product.price.toFixed(2).replace(/\.00$/, '')}
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default ProductPageLink;
