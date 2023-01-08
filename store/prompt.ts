import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import type { PromptItemProps } from '../components/prompt/PromptItem';

export const selectAllPrompts = createSelector(
  ({ prompts: state }: RootState) => state.prompts,
  (prompts) => prompts
);

interface IState {
  prompts: prompts.Model[];
}

const initialState: IState = {
  prompts: [],
};

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<prompts.Model[]>) => {
      state.prompts = action.payload;
    },
    add: (state: IState, action: PayloadAction<prompts.Model>) => {
      state.prompts = [...state.prompts, action.payload];
    },
    remove: (state: IState, action: PayloadAction<number>) => {
      state.prompts = state.prompts.filter(
        (prompt) => prompt.id !== action.payload
      );
    },
  },
});

export const { set, add, remove } = promptSlice.actions;

export default promptSlice.reducer;
