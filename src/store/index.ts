import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api.ts';
import currentCitySlices from './slices/current-city-slices.ts';
import offersSlices from './slices/offers-slices.ts';
import nearOffersSlices from './slices/near-offers-slices.ts';
import offerSlices from './slices/offer-slices.ts';
import reviewSlices from './slices/review-slices.ts';
import currentSortingSlices from './slices/current-sorting-slices.ts';
import userSlices from './slices/user-slices.ts';
import favoritesOffersSlices from './slices/favorites-offers-slices.ts';
import reviewFormSlices from './slices/review-form-slices.ts';

export const api = createApi();

export const store = configureStore({
  reducer: {
    currentCity: currentCitySlices,
    offers: offersSlices,
    offer: offerSlices,
    favoritesOffers: favoritesOffersSlices,
    nearOffers: nearOffersSlices,
    reviews: reviewSlices,
    reviewForm: reviewFormSlices,
    currentSorting: currentSortingSlices,
    user: userSlices
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
  )
});
