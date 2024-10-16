import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is a GET request' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
