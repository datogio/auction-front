import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';
import * as errorActions from './error';
import type { NextRouter } from 'next/router';

export const signIn = createAsyncThunk(
  'user/sign-in',
  async (
    {
      router,
      email,
      password,
    }: { router: NextRouter; email: string; password: string },
    { dispatch }
  ) => {
    api
      .signIn(email, password)
      .then(() => {
        dispatch(errorActions.set(null));
        router.reload();
      })
      .catch(() => dispatch(errorActions.set('Invalid email or password')));
  }
);

export const signUp = createAsyncThunk(
  'user/sign-up',
  async (
    {
      router,
      username,
      password,
    }: { router: NextRouter; username: string; password: string },
    { dispatch }
  ) => {
    api
      .signUp(username, password)
      .then(() => {
        dispatch(errorActions.set(null));
        router.reload();
      })
      .catch(() => dispatch(errorActions.set('Email already taken')));
  }
);

export const signOut = createAsyncThunk(
  'user/sign-out',
  async ({ router }: { router: NextRouter }, { dispatch }) => {
    api
      .signOut()
      .then(() => {
        dispatch(errorActions.set(null));
        router.reload();
      })
      .catch((err) => dispatch(errorActions.set(err.message)));
  }
);
