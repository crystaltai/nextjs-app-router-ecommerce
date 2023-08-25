import { getUser } from './auth/[...thirdweb]';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getUser(req);

  if (!user) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }

  return res.status(200).json({
    message: `You have been logged in under address: ${user.address}`,
  });
};

export default handler;
