import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import type { PromptItemProps } from '../components/prompt/PromptItem';

export const selectAllPrompts = createSelector(
  ({ prompts: state }: RootState) => state.prompts,
  (prompts) => prompts
);

interface IState {
  prompts: PromptItemProps[];
}

const initialState: IState = {
  prompts: [],
};

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<PromptItemProps[]>) => {
      state.prompts = action.payload;
    },
  },
});

export const { set } = promptSlice.actions;

export default promptSlice.reducer;
