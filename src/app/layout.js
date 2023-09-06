import Header from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'XYZ Marketplace',
  description: 'EY Blockchain Rewards Store',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${poppins.variable} ${interstateLight.variable} ${interstateRegular.variable} ${interstateLightBold.variable} ${interstateBold.variable}`}
    >
      <body>
        <Header />
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}

// Import fonts
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins',
});

import localFont from 'next/font/local';
const interstateLight = localFont({
  src: '../fonts/EYInterstate-Light.ttf',
  weight: '200',
  variable: '--font-interstate-light',
});

const interstateRegular = localFont({
  src: '../fonts/EYInterstate-Regular.ttf',
  weight: '400',
  variable: '--font-interstate-regular',
});

const interstateLightBold = localFont({
  src: '../fonts/EYInterstate-LightBold.ttf',
  weight: '500',
  variable: '--font-interstate-lightbold',
});

const interstateBold = localFont({
  src: '../fonts/EYInterstate-Bold.ttf',
  weight: '700',
  variable: '--font-interstate-bold',
});
