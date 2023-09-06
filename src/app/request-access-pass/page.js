import React from 'react';
import Image from 'next/image';
import styles from './request.module.css';

export default function RequestAccessPass() {
  return (
    <main>
      <div className={styles.RequestWrapper}>
        <div className={styles.RequestMessage}>
          <h1>Oops.</h1>
          <h2>You don't have access to XYZ Marketplace.</h2>
          <h3>
            Your connected wallet must hold the XYZ Marketplace Access Pass NFT
            to enter. If you don't have one, please reach out to us to request
            for one.
          </h3>
          <a
            className={styles.RequestButton}
            href='mailto:crystal.tai@ey.com, tulika.harsulkar@ey.com, jesse.jacob@ey.com?subject=XYZ Marketplace - Request Access Pass'
          >
            Request Access Pass
          </a>
        </div>
        <div className={styles.AccessPass}>
          <Image
            src='/access-pass.png'
            alt='access-pass'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              borderRadius: '16px',
            }}
          />
        </div>
      </div>
    </main>
  );
}
