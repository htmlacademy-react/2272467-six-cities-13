import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchOffers } from '../api-actions/offers-action.ts';
import { NameSpace } from '../../constants/name-space.ts';

type TOffersState = {
  offers: TOffer[];
  isLoading: boolean;
}

const initialState: TOffersState = {
  offers: [],
  isLoading: false,
};

const offersSlices = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      });
  }
});

export default offersSlices.reducer;

