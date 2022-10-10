import Cookies from 'cookies';

// types
import type { SetOption } from 'cookies';

const cookieOptions: SetOption = {
  httpOnly: true,
  sameSite: 'lax',
  maxAge: 1000 * 60 * 60 * 24 * 30,
};

export const setToken = (req: any, res: any, value: string): void => {
  const cookies = new Cookies(req, res);

  const token = value;

  cookies.set('token', token, cookieOptions);
};

export const getToken = (req: any, res: any) => {
  const cookies = new Cookies(req, res);

  const token = cookies.get('token') || null;

  return token;
};
