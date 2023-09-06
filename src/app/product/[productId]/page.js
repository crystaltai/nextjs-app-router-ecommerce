import React from 'react';
import Image from 'next/image';
import styles from './productDetails.module.css';

// Fetch product details
async function getProductDetails(id) {
  const baseUrl = process.env.BASE_URL;
  const url = `/api/product/${id}`;
  const response = await fetch(baseUrl + url);
  const data = await response.json();
  return data;
}

export default async function ProductDetails({ params }) {
  const data = await getProductDetails(params.productId);
  const details = data[0];

  return (
    <main>
      <div className={styles.ProductDetailsWrapper}>
        <div className={styles.ProductImageWrapper}>
          <Image
            src={`https://cloudflare-ipfs.com/ipfs/${details.rewardImage}`}
            alt={details.rewardImage}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              borderRadius: '16px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.ProductDetails}>
          <h1>{details.rewardName}</h1>
          <h2>{`${details.rewardPrice} ${details.rewardCurrency}`}</h2>
          <h4>{details.rewardDescription}</h4>

          <div className={styles.Row}>
            <h5 className={styles.RowLabel}>Redeem Instructions</h5>
            <p>{details.rewardRedeemInstructions}</p>
          </div>

          <div className={styles.Row}>
            <h5 className={styles.RowLabel}>Reward Creator</h5>
            <p>{details.rewardCreatorName}</p>
          </div>

          <div className={styles.Row}>
            <h5 className={styles.RowLabel}>Available Quantity</h5>
            <p>{details.rewardQuantity}</p>
          </div>

          <button className={styles.RedeemButton}>Redeem</button>
        </div>
      </div>
    </main>
  );
}
