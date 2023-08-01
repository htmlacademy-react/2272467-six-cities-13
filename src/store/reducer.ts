import { createReducer } from '@reduxjs/toolkit';
import { getOffers, setCurrentCity } from './action.ts';
import { cities } from '../constants/city.ts';
import { TCity, TOffer } from '../types/offers.ts';
import { offers } from '../mocks/offers.ts';

const initialState: {
  currentCity: TCity;
  offers: TOffer[];
} = {
  currentCity: cities[0],
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
});

export { reducer };
