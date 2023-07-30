'use client';
import React, { FC } from 'react';
import { useFetchData } from './recoilAtoms';
import styles from './page.module.css'
import ProductImages from './components/ProductImages/ProductImages';

const Home: FC = () =>{
  const { products, loading } = useFetchData();

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div>
        <ProductImages products={products} />
      </div>
    </main>
  );
}

export default Home;