import { createAsyncThunk } from '@reduxjs/toolkit';
import * as errorActions from './error';
import * as strapi from '../services/strapi';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    { identifier, password }: { identifier: string; password: string },
    { dispatch }
  ) => {
    strapi
      .signIn(identifier, password)
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
  }
);
