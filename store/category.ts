import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import * as api from '../services/api';

export const setAllCategories = createAsyncThunk(
  'category/setAll',
  async ({}, { dispatch }) => {
    api
      .getAllCategories()
      .then((categories) => {
        dispatch(set(categories));
      })
      .catch((err) => console.log(err.message));
  }
);

export const selectAllCategories = createSelector(
  ({ categories: state }: RootState) => state.categories,
  (categories) => categories
);

export const selectActiveCategory = createSelector(
  ({ categories: state }: RootState) => state.active,
  (active) => active
);

interface IState {
  categories: category.Model[];
  active: category.Model | null;
}

const initialState: IState = {
  categories: [],
  active: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<category.Model[]>) => {
      state.categories = action.payload;
    },
    setActive: (
      state: IState,
      action: PayloadAction<category.Model | null>
    ) => {
      state.active = action.payload;
    },
  },
});

export const { set, setActive } = categorySlice.actions;

export default categorySlice.reducer;
