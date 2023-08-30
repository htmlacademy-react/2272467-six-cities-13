import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchNearOffer } from '../api-actions/near-offers-action.ts';
import { NameSpace } from '../../constants/name-space.ts';

type TNearOffersState = {
  nearOffers: TOffer[];
}

const initialState: TNearOffersState = {
  nearOffers: []
};

const nearOfferSlices = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {
    dropNearOffers(state) {
      state.nearOffers = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffer.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});

export default nearOfferSlices.reducer;
export const { dropNearOffers } = nearOfferSlices.actions;

