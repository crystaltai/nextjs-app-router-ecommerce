import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const activeChain = 'mumbai';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        activeChain={activeChain}
        queryClient={queryClient}
        authConfig={{
          domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
          authUrl: './api/auth',
        }}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
