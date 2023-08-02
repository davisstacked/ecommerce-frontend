'use client';
import React, { FC } from 'react';
import { useFetchData } from './recoil/atoms';
import styles from './page.module.scss';
import ProductLinkList from './components/ProductLinkList/ProductLinkList';
import Advertisement from './components/Advertisement/Advertisement';

const Home: FC = () => {
  const { products, loading } = useFetchData();

  const { title, homePage, productLinks } = styles;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={homePage}>
      <Advertisement />
      <div className={title}>
        <h1>Explore our latest drops</h1>
      </div>
      <div className={productLinks}>
        <ProductLinkList products={products} />
      </div>
    </div>
  );
};

export default Home;
