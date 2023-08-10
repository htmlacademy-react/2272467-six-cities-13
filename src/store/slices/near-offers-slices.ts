import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';

type TNearOffersState = {
  nearOffers: TOffer[];
}

const initialState: TNearOffersState = {
  nearOffers: []
};

const nearOfferSlices = createSlice({
  name: 'nearOffers',
  initialState,
  reducers: {
    setNearOffers(state, action: PayloadAction<TOffer[]>) {
      state.nearOffers = action.payload;
    }
  }
});

export default nearOfferSlices.reducer;

export const { setNearOffers } = nearOfferSlices.actions;

