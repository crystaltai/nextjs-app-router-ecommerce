import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Link from 'next/link';

function ProductCard({
  _id,
  rewardImage,
  rewardName,
  rewardPrice,
  rewardCurrency,
  rewardQuantity,
}) {
  return (
    <Link href={`/product/${_id}`}>
      <div className={styles.ProductCardWrapper}>
        <div className={styles.ImageWrapper}>
          <Image
            src={`https://cloudflare-ipfs.com/ipfs/${rewardImage}`}
            alt={rewardName}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              borderRadius: '16px 16px 0px 0px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.ProductCardContents}>
          <div className={styles.Row}>
            <p>{rewardName}</p>
            <p
              className={styles.ProductPrice}
            >{`${rewardPrice} ${rewardCurrency}`}</p>
          </div>
          <div className={styles.Row}>
            <h5
              className={styles.ProductRemaining}
            >{`${rewardQuantity} Remaining`}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
