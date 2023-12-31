'use client';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Product, ShoppingCart } from '../interfaces';
import { fetchData } from '../api';

export const productsState = atom<Product[]>({
  key: 'productsState',
  default: [],
});

export function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useRecoilState(productsState);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [setProducts]);

  return { loading, products };
}

export const shoppingCartState = atom<ShoppingCart>({
  key: 'shoppingCartState',
  default: { items: [] }
});

