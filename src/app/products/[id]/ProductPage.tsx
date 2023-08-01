import React, { FC, useState } from 'react';
import { Product } from '../../interfaces';
import AddToCartButton from '../../components/AddToCartButton';
import { Counter } from '../../components/Counter';
import styles from './ProductPage.module.scss';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

interface ProductPageProps {
  product: Product;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className={styles.productPage}>
      <div className={styles.image}>
        <ProductCarousel images={product.images}/>
        <div className={styles.details}>
          <div className={styles.brand}>{product.brand}</div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>
            ${product.price.toFixed(2).replace(/\.00$/, '')}
          </div>
          <Counter
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <AddToCartButton product={product} quantity={quantity} />
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
