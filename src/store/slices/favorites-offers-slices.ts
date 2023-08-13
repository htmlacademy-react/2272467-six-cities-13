import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchFavoritesOffers } from '../api-actions/favorites-offers-action.ts';

type TFavoritesOffersState = {
  favoritesOffers: TOffer[];
  isLoading: boolean;
}

const initialState: TFavoritesOffersState = {
  favoritesOffers: [],
  isLoading: false
};

const favoritesOffersSlices = createSlice({
  name: 'favoritesOffers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isLoading = false;
      });
  }
});

export default favoritesOffersSlices.reducer;

