'use client';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '../../recoilAtoms';
import ProductPage from './ProductPage';

interface Product {
  id: number;
}

interface Params {
  id: string;
}

interface ProductPageContainerProps {
  params: Params;
}

const ProductPageContainer: FC<ProductPageContainerProps> = ({ params }) => {
  const products = useRecoilValue(productsState);
  const { id } = params;
  const product = products.find(
    (product: Product) => product.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
};

export default ProductPageContainer; 