import React from 'react';
import Wallet from '../Wallet/Wallet';
import Menu from '../Menu/Menu';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              src='/EY-logo-white.png'
              width={43}
              height={43}
              alt='EY Logo'
              style={{
                backgroundColor: '#2E3440',
                padding: '7px',
                borderRadius: '5px',
              }}
            />
            <div>XYZ Marketplace</div>
          </div>
        </Link>
        <span className={styles.separator}></span>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/create'>Create Reward</Link>
            </li>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <Wallet />
        <button>WALLET CONNECT</button>
      </div>
      <div className={styles.headerMenu}>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
