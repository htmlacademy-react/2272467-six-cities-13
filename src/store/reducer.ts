import { createReducer } from '@reduxjs/toolkit';
import {
  dropOffer,
  getFavoritesOffers,
  getNearOffers,
  getOffer,
  getOffers,
  getReviews,
  requireAuthorizationStatus,
  setCurrentCity, setCurrentSorting,
  setOffersLoadingStatus
} from './action.ts';
import { City } from '../constants/city.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';
import { TInitialState } from '../types/state.ts';
import { SortDescription } from '../constants/sort-description.ts';


const initialState: TInitialState = {
  currentCity: City.Paris,
  offers: [],
  offer: null,
  favoritesOffers: [],
  nearOffers: [],
  isOffersLoading: false,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  currentSorting: SortDescription.Popular
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
    .addCase(getFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setCurrentSorting, (state, action) => {
      state.currentSorting = action.payload;
    });
});

export { reducer };
