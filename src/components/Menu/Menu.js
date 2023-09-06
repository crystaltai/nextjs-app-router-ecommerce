'use client';
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.MenuWrapper}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={styles.MenuButton}>
            <span className={styles.BurgerLine} />
            <span className={styles.BurgerLine} />
            <span className={styles.BurgerLine} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={styles.DropdownMenuContent}
            sideOffset={5}
          >
            <DropdownMenu.Item
              className={`${styles.DropdownMenuItem} ${styles.DropdownMenuLink}`}
            >
              <a href='/' as='style'>
                Home
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className={`${styles.DropdownMenuItem} ${styles.DropdownMenuLink}`}
            >
              <a href='/create' as='style'>
                Create Reward
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className={`${styles.DropdownMenuItem} ${styles.DropdownMenuLink}`}
            >
              <a href='/faq' as='style'>
                FAQ
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />

            <DropdownMenu.Label className={styles.DropdownMenuLabel}>
              Wallet Balance
            </DropdownMenu.Label>
            <DropdownMenu.Item className={styles.DropdownMenuItem}>
              1,200 XYZ
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.DropdownMenuItem}>
              32 NFT
            </DropdownMenu.Item>

            <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />

            <DropdownMenu.Item className={styles.DropdownMenuItem}>
              <button>WALLET CONNECT</button>
            </DropdownMenu.Item>

            <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default Menu;
