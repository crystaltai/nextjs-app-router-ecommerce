import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid({ productList }) {
  return (
    <div className={styles.ProductGridWrapper}>
      {productList.map(product => (
        <div key={product._id} className={styles.ProductCard}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
