'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/images'); 
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
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
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={261}
          height={284}
          priority
        />
      </div>
    </main>
  );
}
