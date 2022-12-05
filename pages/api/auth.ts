import { setToken } from '../../services/cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { identifier, password, type } = req.body;

  if (type === 'sign-out') {
    setToken(req, res, '');

    return res.status(200).json({ message: 'success' });
  }

  type === 'sign-in' &&
    (await fetch(`http://localhost:1337/api/auth/local`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ identifier, password }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const user = await resp.json();

        setToken(req, res, user.jwt);

        return res.status(200).json({ message: 'success' });
      })
      .catch((err) => res.status(400).json(err)));
};

export default handler;
