import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

function Banner({ gradient, imageSrc, title, subtitle, linkSrc, linkText }) {
  return (
    <div className={styles.BannerWrapper} style={{ backgroundImage: gradient }}>
      <div className={styles.BannerContent}>
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
        {linkSrc && (
          <a href={linkSrc} className={styles.BannerLink}>
            {linkText}
          </a>
        )}
      </div>
      <div className={styles.BannerImageWrapper}>
        <Image
          src={imageSrc}
          alt='banner'
          width={250}
          height={250}
          unoptimized={true}
        />
      </div>
    </div>
  );
}

export default Banner;
