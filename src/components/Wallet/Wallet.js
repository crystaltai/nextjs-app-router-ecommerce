import React from 'react';
import Image from 'next/image';
import styles from './Wallet.module.css';

function Wallet() {
  return (
    <div className={styles.walletContainer}>
      <Image src='/wallet.svg' width={28} height={28} alt='wallet-icon' />
      <div>1,200 XYZ</div>
      <span className={styles.separator}></span>
      <div>25 NFT</div>
    </div>
  );
}

export default Wallet;
