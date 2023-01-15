import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from '../../services/cookies';
import { API_URL } from '../../utils/urls';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = getToken(req, res);
  if (!token) return res.status(401).json({ message: 'unauthorized' });
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${token}`);
  await fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers,
  })
    .then(async (resp) => {
      if (!resp.ok) {
        return res.status(resp.status).json(resp);
      }
      const { data: user } = await resp.json();
      return res.status(200).json({ ...user, token });
    })
    .catch((err) => res.status(401).json(err));
};

export default handler;
