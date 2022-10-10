import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from '../../../services/cookies';
import { API_URL } from '../../../utils/urls';

interface Data {
  projects?: project.Response[];
  message?: 'Unauthorized';
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Response>
) => {
  const token = getToken(req, res);

  if (!token) return res.status(403).json({ message: 'Unauthorized' });

  const { id } = req.query;

  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${token}`);

  if (req.method === 'GET') {
    await fetch(`${API_URL}/api/projects?filters[owner][id][$eq]=${id}`, {
      headers,
    })
      .then(async (resp) => {
        if (!resp.ok) {
          return res.status(resp.status).json(resp);
        }

        const projects = await resp.json();

        return res.status(200).json(projects);
      })
      .catch((err) => res.status(400).json(err));
  }
};

export default handler;
