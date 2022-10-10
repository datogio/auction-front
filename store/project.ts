import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CLIENT_URL } from '../utils/urls';
import * as errorAcitons from './error';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const getAll = createAsyncThunk(
  'tasks/all',
  async ({ user }: { user: user.User }, { dispatch }) => {
    fetch(`${CLIENT_URL}/api/projects/${user.id}`, {
      headers,
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }

        const projects: project.Response[] = await resp.json();

        dispatch(set(projects));
      })
      .catch((err) => dispatch(errorAcitons.set(err.message)));
  }
);

interface IInitialState {
  projects: project.Response[];
}

const initialState: IInitialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    set: (state: IInitialState, action: PayloadAction<project.Response[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { set } = projectSlice.actions;

export default projectSlice.reducer;
