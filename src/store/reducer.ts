import { createReducer } from '@reduxjs/toolkit';
import {
  dropOffer, getFavoritesOffers,
  getNearOffers,
  getOffer,
  getOffers,
  getReviews,
  requireAuthorizationStatus,
  setCurrentCity, setError
} from './action.ts';
import { City } from '../constants/city.ts';
import { TOffer } from '../types/offers.ts';
import { TReview } from '../types/review.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';


const initialState: {
  currentCity: City;
  offers: TOffer[];
  nearOffers: TOffer[];
  reviews: TReview[];
  offer: TOffer | null;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  favoritesOffers: TOffer[];
} = {
  currentCity: City.Paris,
  offers: [],
  nearOffers: [],
  reviews: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  favoritesOffers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(requireAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    });
});

export { reducer };
