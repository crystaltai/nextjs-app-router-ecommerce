import React from 'react';
import Image from 'next/image';
import Accordion from '../Accordion/Accordion';
import styles from './FAQSection.module.css';

function FAQSection({ question, answer, techAnswer }) {
  return (
    <div className={styles.FAQSectionWrapper}>
      <div className={styles.Icon}>
        <Image src='/ethereum.svg' alt='ethereum-icon' width={20} height={20} />
      </div>
      <div className={styles.Content}>
        <h3 className={styles.Question}>{question}</h3>
        <h4 className={styles.Answer}>{answer}</h4>
        {techAnswer ? <Accordion techAnswer={techAnswer} /> : ''}
      </div>
    </div>
  );
}

export default FAQSection;
