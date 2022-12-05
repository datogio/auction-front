import { createAsyncThunk } from '@reduxjs/toolkit';
import * as errorActions from './error';
import * as strapi from '../services/strapi';

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    strapi
      .signOut()
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (
    { identifier, password }: { identifier: string; password: string },
    { dispatch }
  ) => {
    strapi
      .signUp(identifier, password)
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
  }
);

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
