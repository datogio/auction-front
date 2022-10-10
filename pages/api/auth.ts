// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setToken } from '../../services/cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

export type RequestData = {
  data: {
    type: 'sign-in' | 'sign-up' | 'sign-out';
    identifier?: string;
    username?: string;
    password?: string;
  };
};

type ResponseData = {
  message: 'Success';
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Response>
) => {
  const { method } = req;
  const { data }: RequestData = req.body;

  const requestHeaders = new Headers();
  requestHeaders.set('Accept', req.headers.accept || 'application/json');
  requestHeaders.set('Content-Type', 'application/json');

  if (data.type === 'sign-out') {
    setToken(req, res, '');

    return res.status(200).json({ message: 'Success' });
  }

  if (data.type === 'sign-up') {
    await fetch(`http://localhost:1337/api/auth/local/register`, {
      method,
      headers: requestHeaders,
      body: JSON.stringify({
        username: data.username,
        email: data.username,
        password: data.password,
      }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          return res.status(resp.status).json(resp);
        }

        const data = await resp.json();

        setToken(req, res, data.jwt);

        return res.status(200).json({ message: 'Success' });
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }

  if (data.type === 'sign-in') {
    await fetch('http://localhost:1337/api/auth/local', {
      method,
      headers: requestHeaders,
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          return res.status(resp.status).json(resp);
        }

        const data = await resp.json();

        setToken(req, res, data.jwt);

        return res.status(200).json({ message: 'Success' });
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
};

export default handler;
