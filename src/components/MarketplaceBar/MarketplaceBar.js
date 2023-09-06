import React from 'react';
import styles from './MarketplaceBar.module.css';

function MarketplaceBar({
  numOfProducts,
  currencyOptions,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className={styles.MarketplaceBarWrapper}>
      <div className={styles.AvailableProducts}>
        <h4>
          Available Products{' '}
          <span className={styles.ProductCount}>({numOfProducts})</span>
        </h4>
      </div>
      <div className={styles.CurrencyFilterWrapper}>
        <h4 className={styles.CurrencyFilterLabel}>Filter by currency:</h4>
        <div className={styles.CurrencyButtonGroup}>
          {currencyOptions.map(currency => (
            <button
              key={currency}
              className={`${styles.CurrencyButton} ${
                activeFilter === currency ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(currency)}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketplaceBar;
