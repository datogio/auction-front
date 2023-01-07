import Router from 'next/router';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import * as api from '../services/api';
import { RootState } from '.';
import { SetStateAction } from 'react';
import * as promptActions from './prompt';

export const setUser = createAsyncThunk(
  'user/setUser',
  async ({}, { dispatch }) => {
    api
      .getUser()
      .then((user) => dispatch(set(user)))
      .catch((err) => console.log(err));
  }
);

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    api
      .signOut()
      .then(() => {
        dispatch(set(null));
        Router.push('/');
      })
      .catch((err) =>
        dispatch(promptActions.add({ type: 'error', message: err.message }))
      );
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (
    {
      firstName,
      lastName,
      email,
      password,
      setInputs,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          firstName: string;
          lastName: string;
          email: string;
          confirmEmail: string;
          password: string;
          confirmPassword: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    api
      .signUp(firstName, lastName, email, password)
      .then((user) => {
        dispatch(set(user));
        dispatch(promptActions.set([]));
        setInputs({
          firstName: '',
          lastName: '',
          email: '',
          confirmEmail: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch(() =>
        dispatch(
          promptActions.add({
            type: 'error',
            message: 'Email is taken by another user',
          })
        )
      );
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    {
      email,
      password,
      setInputs,
    }: {
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          email: string;
          password: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    api
      .signIn(email, password)
      .then((user) => {
        dispatch(set(user));
        dispatch(promptActions.set([]));
        setInputs({ email: '', password: '' });
      })
      .catch(() =>
        dispatch(
          promptActions.add({
            type: 'error',
            message: 'Invalid email or password',
          })
        )
      );
  }
);

export const selectUser = createSelector(
  ({ user: state }: RootState) => state.user,
  (user) => user
);

interface IState {
  user: user.Model | null;
}

const initialState: IState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<user.Model | null>) => {
      state.user = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
