import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchNearOffer } from '../api-actions/near-offers-action.ts';

type TNearOffersState = {
  nearOffers: TOffer[];
}

const initialState: TNearOffersState = {
  nearOffers: []
};

const nearOfferSlices = createSlice({
  name: 'nearOffers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffer.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});

export default nearOfferSlices.reducer;

