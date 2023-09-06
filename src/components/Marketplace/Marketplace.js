'use client';
import React from 'react';
import MarketplaceBar from '../MarketplaceBar/MarketplaceBar';
import styles from './Marketplace.module.css';
import ProductGrid from '../ProductGrid/ProductGrid';

const currencyOptions = ['All', 'XYZ', 'NFT'];

function Marketplace({ productList }) {
  const [activeFilter, setActiveFilter] = React.useState(currencyOptions[0]);

  const filteredProductList = productList.filter(
    product => product.rewardCurrency === activeFilter
  );

  return (
    <div className={styles.MarketplaceWrapper}>
      <MarketplaceBar
        numOfProducts={
          activeFilter === currencyOptions[0]
            ? productList.length
            : filteredProductList.length
        }
        currencyOptions={currencyOptions}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProductGrid
        productList={
          activeFilter === currencyOptions[0]
            ? productList
            : filteredProductList
        }
      />
    </div>
  );
}

export default Marketplace;
