const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const signOut = () => {
  return new Promise(
    (
      resolve: (message: 'success') => void,
      reject: (message: 'Problem signing user out') => void
    ) => {
      fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers,
        body: JSON.stringify({ type: 'sign-out' }),
      })
        .then(() => {
          resolve('success');
        })
        .catch(() => reject('Problem signing user out'));
    }
  );
};

export const signUp = (identifier: string, password: string) => {
  return new Promise(
    (
      resolve: (message: 'success') => void,
      reject: (message: 'Email already taken') => void
    ) => {
      fetch(`http://localhost:3000/api/auth`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ identifier, password, type: 'sign-up' }),
      })
        .then((resp) => {
          if (!resp.ok) {
            reject('Email already taken');
          }

          resolve('success');
        })
        .catch(() => reject('Email already taken'));
    }
  );
};

export const signIn = (identifier: string, password: string) => {
  return new Promise(
    (
      resolve: (message: 'success') => void,
      reject: (message: 'Ivalid email or password') => void
    ) => {
      fetch(`http://localhost:3000/api/auth`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ identifier, password, type: 'sign-in' }),
      })
        .then((resp) => {
          if (!resp.ok) {
            reject('Ivalid email or password');
          }

          resolve('success');
        })
        .catch(() => reject('Ivalid email or password'));
    }
  );
};
