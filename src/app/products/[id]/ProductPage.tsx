import React, { FC, useState } from 'react';
import { Product } from '../../interfaces';
import AddToCartButton from '../../components/AddToCartButton';
import { Counter } from '../../components/Counter';
import styles from './ProductPage.module.scss';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Image from 'next/image';

interface ProductPageProps {
  product: Product;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const {
    productPage,
    contentContainer,
    carouselContainer,
    detailsContainer,
    infoContainer,
    brand,
    name,
    price,
    counterContainer,
    divider,
    addToCartButtonWrapper,
    detailsWrapper,
    descriptionContainer,
    descriptionWrapper,
    text,
    imageContainer,
    carouselWrapper,
  } = styles;

  return (
    <div className={productPage}>
      <div className={contentContainer}>
        <div className={carouselContainer}>
          <ProductCarousel images={product.images} />
        </div>
        <div className={detailsContainer}>
          <div className={detailsWrapper}>
            <div className={infoContainer}>
              <div className={brand}>{product.brand}</div>
              <div className={name}>{product.name}</div>
              <div className={price}>
                ${product.price.toFixed(2).replace(/\.00$/, '')}
              </div>
            </div>

            <div className={divider} />
            <div className={counterContainer}>
              <h6>Quantity</h6>
              <Counter
                quantity={quantity}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            </div>
            <div className={addToCartButtonWrapper}>
              <AddToCartButton product={product} quantity={quantity} />
            </div>
          </div>
        </div>
        <div className={descriptionContainer}>
          <div className={descriptionWrapper}>
            <h2>Description</h2>
            <div className={divider} />
            <p className={text}>{product.description}</p>
          </div>
        </div>
        <div className={imageContainer}>
          <Image
            src={product.images[3]}
            alt={product.alt}
            width={528}
            height={373}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
