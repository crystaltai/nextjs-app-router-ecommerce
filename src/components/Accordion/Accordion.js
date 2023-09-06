'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Accordion.module.css';

function Accordion({ techAnswer }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.AccordionWrapper}>
      <div
        className={styles.AccordionTrigger}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.AccordionTitle}>
          <Image src='/curious.svg' alt='curious-icon' width={20} height={20} />
          <h4>For the tech curious</h4>
        </div>
        <h4>+</h4>
      </div>
      {isActive && <div className={styles.AccordionContent}>{techAnswer}</div>}
    </div>
  );
}

export default Accordion;
