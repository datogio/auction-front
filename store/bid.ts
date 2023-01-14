import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import * as api from '../services/api';
import * as promptActions from '../store/prompt';

export const createBid = createAsyncThunk(
  'bid/createBid',
  async (
    {
      amount,
      bidder,
      listingId,
    }: { amount: number; bidder: user.Model; listingId: string },
    { dispatch }
  ) => {
    api
      .createBid(amount, bidder, listingId)
      .then((bid) => {
        dispatch(add(bid));
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'notification',
            message: 'Bid successfuly placed',
          })
        );
      })
      .catch((err) =>
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: 'Error placing bid',
          })
        )
      );
  }
);

export const setAllBids = createAsyncThunk(
  'bid/setAddBids',
  async ({}, { dispatch }) => {
    api
      .getAllBids()
      .then((bids) => {
        dispatch(set(bids));
      })
      .catch((err) => console.log(err.message));
  }
);

export const selectListingTopBids = createSelector(
  ({ bids: state }: RootState) => state.bids,
  (_: RootState, listingId: string) => listingId,
  (bids, listingId) =>
    bids.filter((bid) => bid.listing === listingId).splice(0, 4)
);

export const selectListingsTopBid = createSelector(
  ({ bids: state }: RootState) => state.bids,
  (_: RootState, listingId: string) => listingId,
  (bids, listingId) =>
    bids.filter((bid) => bid.listing === listingId).splice(0, 1)[0]
);

interface IState {
  bids: bid.Model[];
}

const initialState: IState = {
  bids: [],
};

export const bidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<bid.Model[]>) => {
      state.bids = action.payload;
    },
    add: (state: IState, action: PayloadAction<bid.Model>) => {
      state.bids = [action.payload, ...state.bids];
    },
  },
});

export const { set, add } = bidSlice.actions;

export default bidSlice.reducer;
