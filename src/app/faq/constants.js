const xyzRewards = (
  <span>
    The XYZ tokens were deployed on an ERC20 smart contract through Thirdweb.
    The contract contains numerous extensions, including the transfer function.
    <br />
    <br />
    When you sign the transaction to redeem an XYZ reward, one blockchain
    transaction occurs:
    <br />
    <br />
    1. <strong>Transfer XYZ tokens - </strong>You approve transferring XYZ
    tokens out of your wallet to another wallet (in this case, the creator of
    the reward). We integrated Thirdweb's SDK retrieve the XYZ token(s) from its
    smart contract. This SDK allows us to access the necessary functions within
    the token's smart contract, including the transfer function. When redeeming
    a reward, the transfer function is called, requiring two arguments: the
    wallet address of the reward creator and the number of XYZ tokens to
    transfer.
    <br />
    <br />
    To streamline the transaction process, we also incorporated a Relayer
    service as part of our Thirdweb's SDK configurations. When you sign the
    transaction to initiate the burning process, the Relayer service is
    triggered. Its purpose is to pay for transaction gas fees on your behalf.
    Read more on the Relayer service below.
  </span>
);

const nftTokens = (
  <span>
    The NFT Attendance tokens were deployed on an ERC1155 smart contract through
    Thirdweb. The contract contains numerous extensions, including the burn and
    mint functions.
    <br />
    <br />
    When you sign the transaction to redeem the NFT Guild Sticker reward, two
    blockchain transactions occur:
    <br />
    <br />
    1. <strong>Burn tokens - </strong>Burning your NFT Attendance tokens
    permanently removes them from circulation and prevents them from being used
    again. We integrated Thirdweb's SDK retrieve the NFT Attendance token from
    its smart contract. This SDK allows us to access the necessary functions
    within the token's smart contract, including the burn function. When
    redeeming a reward, the burn function is called, requiring two arguments:
    the NFT Attendance token ID and the number of tokens to burn.
    <br />
    <br />
    To streamline the transaction process, we also incorporated a Relayer
    service as part of our Thirdweb's SDK configurations. When you sign the
    transaction to initiate the burning process, the Relayer service is
    triggered. Its purpose is to pay for transaction gas fees on your behalf.
    Read more on the Relayer service below.
    <br />
    <br />
    2. <strong>Mint NFT Guild Sticker token - </strong>In order to mint from the
    contract, a wallet needs to be granted the "Minter" role. Instead of
    individually assigning the "Minter" role to each user's wallet, we
    streamlined the process by designating a single root application wallet with
    the "Minter" role. This root wallet handles the minting of the NFT Guild
    Sticker token, as well as its transfer to your wallet and payment of gas
    fees on your behalf.
    <br />
    <br />
    To achieve this, we used ethers.js to establish a connection with the smart
    contract so that we could mint the token (and sign the transaction) from the
    root application wallet to your wallet.
  </span>
);

const gasless = (
  <span>
    Rewards are redeemed using meta-transactions so you do not have to pay gas.
    <br />
    <br />
    We achieved this by utilizing{' '}
    <a
      href='https://docs.openzeppelin.com/defender/relay'
      target='_blank'
      style={{ color: '#3AAFA9', fontWeight: '700' }}
    >
      OpenZeppelin's Defender Relayer
    </a>{' '}
    service, which covers the transaction fees on your behalf when you redeem
    rewards.
    <br />
    <br />
    The Relayer service creates a wallet that the XYZ Marketplace team funds.
    When you sign a transaction (i.e. to transfer or burn your tokens), the
    request is sent to our Relayer, which takes your transaction, pays the
    required gas fees, and submits the transaction to the blockchain network on
    your behalf.
    <br />
    <br />
    This allows for a seamless and gas-less experience, allowing you to fully
    enjoy the benefits of redeeming rewards without any transactional burdens.
  </span>
);

const FAQList = [
  {
    question: 'What is XYZ Marketplace?',
    answer: (
      <span>
        The XYZ Marketplace is the one stop shop for Rewards on the Blockchain
        team. Once you receive enough XYZ or NFT Attendance tokens, you can
        redeem them for all kinds of rewards. The Marketplace is only accessible
        to wallets that are on our whitelist - US Blockchain team members and
        Friends of Blockchain attending the NFT Guild. Please reach out to Gabe
        Stocker or Crystal Tai to be added to the list.
      </span>
    ),
    techAnswer: '',
  },
  {
    question: 'What blockchain does XYZ Marketplace use?',
    answer: <span>XYZ Marketplace runs on Polygon blockchain.</span>,
    techAnswer: '',
  },
  {
    question: 'Who can create a reward on XYZ Marketplace?',
    answer: (
      <span>
        Creating a Reward on the Marketplace is restricted to the XYZ
        Marketplace team and leadership for now. Please contact Damian Kuthoore
        or Crystal Tai for whitelist access.
      </span>
    ),
    techAnswer: '',
  },
  {
    question: 'What tokens do XYZ Marketplace rewards accept?',
    answer: (
      <span>
        Currently, the marketplace accepts XYZ or NFT Attendance tokens.
      </span>
    ),
    techAnswer: '',
  },
  {
    question: 'How do I earn XYZ or NFT Attendance tokens?',
    answer: (
      <span>
        <strong>XYZ tokens - </strong>XYZ Tokens were airdropped to holders of
        EY Blockchain Badges, please contact AJ May or Damian Kuthoore if you
        are a new member to the practice and need a badge. Otherwise, XYZ tokens
        can be earned by helping out with miscellaneous blockchain tasks on our{' '}
        <a
          href='https://eyblockchain.atlassian.net/jira/software/c/projects/JOB/boards/319?selectedIssue=JOB-19&quickFilter=413'
          target='_blank'
          style={{ color: '#3AAFA9', fontWeight: '700' }}
        >
          Job Board
        </a>
        !
        <br />
        <br />
        <strong>NFT Attendance tokens - </strong>The NFT Guild airdrops 1 NFT
        Attendance token for each Guild session every Friday from 3-4 PM. Please
        contact Gabe Stocker for any issues or questions about this token or the
        NFT Guild.
      </span>
    ),
    techAnswer: '',
  },
  {
    question: 'What happens to my XYZ tokens when I redeem a reward?',
    answer: (
      <span>
        When you redeem a reward that accepts XYZ tokens, your XYZ tokens will
        be transferred out of your wallet to the reward creator's wallet. The
        specific number of XYZ tokens required for each reward will vary,
        depending on the creator's corresponding price that's assigned to the
        reward. By redeeming a reward with your XYZ tokens, you'll be
        contributing to the circulation and utilization of the XYZ token within
        the XYZ Marketplace ecosystem!
      </span>
    ),
    techAnswer: xyzRewards,
  },
  {
    question:
      'What happens to my NFT Attendance tokens when I redeem a reward?',
    answer: (
      <span>
        When you redeem a reward that accepts NFT Attendance tokens, your NFT
        Attendance tokens will be burned, and in exchange, an NFT Guild Sticker
        will be minted to your wallet - a digital representation of your
        committed attendance to the NFT Guild sessions!
      </span>
    ),
    techAnswer: nftTokens,
  },
  {
    question:
      'Are there any transaction fees associated with redeeming rewards on XYZ Marketplace?',
    answer: (
      <span>
        No, it's free for you! While blockchain transactions typically require
        gas fees, you will not need to pay any gas to redeem rewards in XYZ
        Marketplace. All you need to do is sign the message to approve the
        redeem transaction. If you're curious how you don't need to pay
        transaction fees, feel free to read below 🤔
      </span>
    ),
    techAnswer: gasless,
  },
  {
    question: 'How can I contribute or provide feedback?',
    answer: (
      <span>
        Your contribution and feedback are invaluable in helping us to improve
        XYZ Marketplace! Feel free to reach out to Damian Kuthoore, Tulika
        Harsulkar, Jesse Jacob, or Crystal Tai anytime :)
      </span>
    ),
    techAnswer: '',
  },
];

export default FAQList;
