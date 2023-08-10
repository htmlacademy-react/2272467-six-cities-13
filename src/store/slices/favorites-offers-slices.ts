import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';

type TFavoritesOffersState = {
  favoritesOffers: TOffer[];
}

const initialState: TFavoritesOffersState = {
  favoritesOffers: []
};

const favoritesOffersSlices = createSlice({
  name: 'favoritesOffers',
  initialState,
  reducers: {
    setFavoritesOffers(state, action: PayloadAction<TOffer[]>) {
      state.favoritesOffers = action.payload;
    }
  }
});

export default favoritesOffersSlices.reducer;

export const { setFavoritesOffers } = favoritesOffersSlices.actions;

