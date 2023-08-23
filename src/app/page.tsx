'use client';
import React, { FC } from 'react';
import Loading from './components/LoadingPage/LoadingPage';
import { useFetchData } from './recoil/atoms';
import styles from './page.module.scss';
import ProductLinkList from './components/ProductLinkList/ProductLinkList';
import Advertisement from './components/Advertisement/Advertisement';

const Home: FC = () => {
  const { products, loading } = useFetchData();

  const { title, homePage } = styles;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={homePage}>
      <Advertisement />
      <h1 className={title}>Explore our latest drops</h1>
      <ProductLinkList products={products} />
    </div>
  );
};

export default Home;
