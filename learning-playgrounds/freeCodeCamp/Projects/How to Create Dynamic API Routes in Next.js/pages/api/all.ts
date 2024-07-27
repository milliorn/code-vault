import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'This is a GET request' });
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'This is a POST request' });
  } else if (req.method === 'PUT') {
    // Handle PUT request
    res.status(200).json({ message: 'This is a PUT request' });
  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    res.status(200).json({ message: 'This is a DELETE request' });
  }
}
