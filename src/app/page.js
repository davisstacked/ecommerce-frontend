'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products'); 
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div>
        {/* should map over shoes. */}
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
