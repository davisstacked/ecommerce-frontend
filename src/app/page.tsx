'use client';
import React from 'react';
import { useFetchData } from './recoilAtoms';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const { products, loading } = useFetchData();

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div>
        {/* should map over products. */}
        <Image
          src={products[0].images[0]}
          alt={products[0].alt}
          width={261}
          height={284}
          priority
        />
      </div>
    </main>
  );
}
