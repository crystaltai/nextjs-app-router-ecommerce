import React from 'react';
import styles from './page.module.css';
import Marketplace from '@/components/Marketplace/Marketplace';
import Banner from '@/components/Banner/Banner';

// Fetch list of all products
async function getProducts() {
  const baseUrl = process.env.BASE_URL;
  const url = '/api/products';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getProducts();

  return (
    <main>
      <Banner
        gradient='var(--gradient-pink-blue)'
        imageSrc='/banner-marketplace.png'
        title='Marketplace'
        subtitle='Redeem your favorite rewards!'
      />
      <Marketplace productList={data} />
    </main>
  );
}
