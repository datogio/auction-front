import { setToken } from '../../services/cookies';
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../utils/urls';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, password, type } = req.body;

  if (type === 'sign-out') {
    setToken(req, res, '');

    return res.status(200).json({ message: 'success' });
  }

  type === 'sign-up' &&
    (await fetch(`${API_URL}/auth/local/register`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const { data: user } = await resp.json();

        setToken(req, res, user.token);

        return res.status(200).json(user);
      })
      .catch((err) => res.status(400).json(err)));

  type === 'sign-in' &&
    (await fetch(`${API_URL}/auth/local/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const { data: user } = await resp.json();

        setToken(req, res, user.token);

        return res.status(200).json(user);
      })
      .catch((err) => res.status(400).json(err)));
};

export default handler;
