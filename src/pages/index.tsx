import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
  Web3Button,
  ConnectWallet,
  useBurnNFT,
  useContract,
} from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Index.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();

  const contractAddress = '0xa7cA3C2186a72c2A5cB47F9d38c04d79b601899F';
  const tokenIdToBurn = '0';
  const amount = 1;
  const { contract } = useContract(contractAddress);
  const { mutateAsync: burnNft, isLoading, error } = useBurnNFT(contract);

  // const getSecret = async () => {
  //   const res = await fetch('/api/secret');
  //   const data = await res.json();
  //   setSecret(data.message);
  // };

  const mintNFT = () => {
    console.log(1);
  };

  const burnNFT = () => {
    console.log(1);
  };

  return (
    <div className={`${inter.className}`}>
      {/* Header */}
      <div className={`${styles.headerWrapper}`}>
        <h1 className={`${styles.pageTitle}`}>One NFT Shop</h1>
        <ConnectWallet />
        {/* {isLoggedIn ? (
          <button
            className={`${styles.buttonBase} ${styles.connectButton}`}
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : address ? (
          <button
            className={`${styles.buttonBase} ${styles.connectButton}`}
            onClick={() => login()}
          >
            Login
          </button>
        ) : (
          <button
            className={`${styles.buttonBase} ${styles.connectButton}`}
            onClick={() => connect()}
          >
            Connect Wallet
          </button>
        )} */}
      </div>

      {/* Shop */}
      <div className={`${styles.shopWrapper}`}>
        <div className={`${styles.nftWrapper}`}>
          <Image
            src='/cat.png'
            alt='Cat NFT'
            className={`${styles.nftImage}`}
            width={350}
            height={24}
            priority
          />
          <div className={`${styles.nftButtons}`}>
            <button
              className={`${styles.buttonBase} ${styles.mintButton}`}
              onClick={mintNFT}
            >
              Mint
            </button>
            <Web3Button
              contractAddress={contractAddress}
              action={async () =>
                await burnNft({
                  tokenId: tokenIdToBurn,
                  amount: amount,
                })
              }
              className={styles.btn}
              onSuccess={() => {
                console.log('Success');
              }}
              onError={e => {
                console.log('Error');
              }}
            >
              Burn
            </Web3Button>
          </div>
        </div>
      </div>
      {/* <pre>Connected Wallet: {address}</pre>
        <pre>User: {JSON.stringify(user, undefined, 2) || 'N/A'}</pre> */}
    </div>
  );
};

export default Home;
