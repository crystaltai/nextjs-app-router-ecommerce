import React from 'react';
import Banner from '@/components/Banner/Banner';

export default function Create() {
  return (
    <main>
      <Banner
        gradient='var(--gradient-green-blue)'
        imageSrc='/banner-create.png'
        title='Create New Reward'
        subtitle='Thanks for contributing to our marketplace!'
      />
      <p>Create new Reward</p>
    </main>
  );
}
