import React from 'react';
import Banner from '@/components/Banner/Banner';
import FAQList from './constants';
import FAQSection from '@/components/FAQSection/FAQSection';
import styles from './faq.module.css';

export default function Faq() {
  return (
    <main>
      <Banner
        gradient='var(--gradient-pink-orange)'
        imageSrc='/banner-faq.png'
        title='FAQ'
        subtitle='Commonly asked questions'
      />
      {FAQList.map((faq, index) => (
        <FAQSection
          key={index}
          question={faq.question}
          answer={faq.answer}
          techAnswer={faq.techAnswer}
        />
      ))}
    </main>
  );
}
