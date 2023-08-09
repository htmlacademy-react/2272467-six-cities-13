import { createAction } from '@reduxjs/toolkit';
import { City } from '../constants/city.ts';
import { TOffer } from '../types/offers.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';
import { TReview } from '../types/review.ts';
import { TSorting } from '../types/sorting.ts';
import { TUser } from '../types/user.ts';

export const setCurrentCity = createAction<City>('offers/setCurrentCity');

export const getOffers = createAction<TOffer[]>('offers/get');

export const getNearOffers = createAction<TOffer[]>('nearOffers/get');

export const getReviews = createAction<TReview[]>('review/get');

export const getOffer = createAction<TOffer>('offer/get');

export const dropOffer = createAction('offer/drop');

export const requireAuthorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getFavoritesOffers = createAction<TOffer[]>('favorite/get');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');

export const setCurrentSorting = createAction<TSorting>('sorting/set');

export const addReview = createAction<TReview>('review/add');
