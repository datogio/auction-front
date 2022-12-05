import type { NextApiRequest, NextApiResponse } from 'next';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { identifier, password, type } = req.body;

  type === 'sign-in' &&
    (await fetch(`http://localhost:1337/api/auth/local`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ identifier, password }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error('Invalid email or password');
        }

        const user = await resp.json();

        return res.status(200).json(user);
      })
      .catch((err) => res.status(400).json(err)));

  res
    .status(400)
    .json({
      message: 'Please provide auth type: (sign-in, sign-up or sign-out)',
    });
};

export default handler;
