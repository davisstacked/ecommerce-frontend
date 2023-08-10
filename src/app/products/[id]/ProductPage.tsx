import React, { FC, useState } from 'react';
import { Product } from '../../interfaces';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import { Counter } from '../../components/Counter/Counter';
import styles from './ProductPage.module.scss';
import Carousel from '../../components/Carousel/Carousel';
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
    carouselContainer,
    infoContainer,
    addToCartContainer,
    brand,
    name,
    price,
    counterContainer,
    divider,
    addToCartButtonWrapper,
    descriptionContainer,
    descriptionWrapper,
    text,
    imageContainer,
  } = styles;

  return (
    <div className={productPage}>
      <div className={carouselContainer}>
        <Carousel images={product.images} />
      </div>
      <div className={addToCartContainer}>
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
      <div className={descriptionContainer}>
        <div className={descriptionWrapper}>
          <h2>Description</h2>
          <div className={divider} />
          <div className={text}>
            <p>{product.description}</p>
            <ul>
              {product.qualities.map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={imageContainer}>
        <Image
          src={product.images[3]}
          alt={product.alt}
          width={175}
          height={124}
          sizes='(max-width: 768px) 200px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, (min-width: 1281px) 800px'
        />
      </div>
    </div>
  );
};

export default ProductPage;
