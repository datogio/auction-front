import { API_URL, CLIENT_URL } from '../utils/urls';

export const getAllListings = () => {
  return new Promise((resolve: (listings: listing.Model[]) => void, reject) => {
    fetch(`${API_URL}/listing`)
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        const { data: listings } = await resp.json();
        resolve(listings);
      })
      .catch((err) => reject(err));
  });
};

export const createListing = (
  title: string,
  description: string,
  startingPrice: string,
  categoryId: string,
  owner: user.Model,
  listingImage: File,
  endDate: string
) => {
  return new Promise((resolve: (listing: listing.Model) => void, reject) => {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${owner.token}`);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('startingPrice', startingPrice);
    formData.append('categoryId', categoryId);
    formData.append('owner', owner.email);
    formData.append('endDate', endDate);
    formData.append('listingImage', listingImage);
    fetch(`${API_URL}/listing`, {
      method: 'POST',
      headers,
      body: formData,
    })
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        const { data: listing } = await resp.json();
        resolve(listing);
      })
      .catch((err) => reject(err));
  });
};

export const getAllCategories = () => {
  return new Promise(
    (resolve: (categories: category.Model[]) => void, reject) => {
      fetch(`${API_URL}/category`)
        .then(async (resp) => {
          if (!resp.ok) {
            reject(resp);
          }
          const { data: categories } = await resp.json();
          resolve(categories);
        })
        .catch((err) => reject(err));
    }
  );
};

export const getUser = () => {
  return new Promise((resolve: (user: user.Model) => void, reject) => {
    fetch(`${CLIENT_URL}/api/user`)
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

export const signOut = () => {
  return new Promise((resolve, reject) => {
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
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
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
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
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
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
