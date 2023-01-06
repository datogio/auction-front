import { API_URL, CLIENT_URL } from '../utils/urls';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const signOut = () => {
  return new Promise((resolve, reject) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ type: 'sign-out' }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        resolve({ message: 'success' });
      })
      .catch((err) => reject(err));
  });
};

export const signIn = (email: string, password: string) => {
  return new Promise((resolve: (user: user.Model) => void, reject) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password, type: 'sign-in' }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        const user = await resp.json();
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};

export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return new Promise((resolve: (user: user.Model) => void, reject) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        type: 'sign-up',
      }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        const user = await resp.json();
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};
