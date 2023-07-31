import React, { FC } from 'react';
import { ProductState } from '../../interfaces';
import ProductLink from './ProductLink';
import styles from './ProductLink.module.scss';

const ProductPageLinkList: FC<ProductState> = ({ products }) => {
  return (
    <div className={styles.productImages}>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <ProductLink key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageLinkList;
