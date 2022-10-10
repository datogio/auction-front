import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  error: string | null;
}

const initialState: IState = {
  error: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<IState['error']>) => {
      state.error = action.payload;
    },
  },
});

export const { set } = errorSlice.actions;

export default errorSlice.reducer;
