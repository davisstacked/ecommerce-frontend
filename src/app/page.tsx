'use client';
import React, { FC } from 'react';
import { useFetchData } from './recoil/atoms';
import styles from './page.module.scss';
import ProductLinkList from './components/ProductLinkList/ProductLinkList';
import Advertisement from './components/Advertisement/Advertisement';

const { main, contentWrapper, title } = styles;

const Home: FC = () => {
  const { products, loading } = useFetchData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={main}>
      <div className={contentWrapper}>
          <Advertisement />
        <h1 className={title}>Explore our latest drops</h1>
        <div>
          <ProductLinkList products={products} />
        </div>
      </div>
    </main>
  );
};

export default Home;
