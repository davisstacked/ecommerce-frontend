'use client';
import React, { FC } from 'react';
import { useFetchData } from './recoil/atoms';
import styles from './page.module.css';
import ProductLinkList from './components/ProductLinkList/ProductLinkList';
import Advertisement from './components/Advertisement/Advertisement';

const Home: FC = () =>{
  const { products, loading } = useFetchData();

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <Advertisement />
      <h1 className={styles.title}>Explore our latest drops</h1>
      <div>
        <ProductLinkList products={products} />
      </div>
    </main>
  );
}

export default Home;