import type { RequestData as AuthRequestData } from '../pages/api/auth';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const signOut = () => {
  const data: AuthRequestData = {
    data: { type: 'sign-out' },
  };

  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        resolve({ message: 'Success' });
      })
      .catch((err) => reject(err));
  });
};

export const signIn = (email: string, password: string) => {
  const data: AuthRequestData = {
    data: {
      type: 'sign-in',
      identifier: email,
      password: password,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const data = await resp.json();

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export const signUp = (username: string, password: string) => {
  const data: AuthRequestData = {
    data: {
      type: 'sign-up',
      username,
      password,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const data = await resp.json();

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
