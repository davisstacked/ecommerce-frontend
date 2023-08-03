'use client';
import React, { FC } from 'react';
import { useFetchData } from './recoil/atoms';
import styles from './page.module.scss';
import ProductLinkList from './components/ProductLinkList/ProductLinkList';
import Advertisement from './components/Advertisement/Advertisement';

const Home: FC = () => {
  const { products, loading } = useFetchData();

  const { title, homePage, productLinks, explore } = styles;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={homePage}>
      <Advertisement />
      <div className={title}>
        <h1 className={explore}>Explore our latest drops</h1>
      </div>
        <ProductLinkList products={products} />
    </div>
  );
};

export default Home;
