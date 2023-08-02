import { createAction } from '@reduxjs/toolkit';
import { City } from '../constants/city.ts';

export const setCurrentCity = createAction<City>('offers/setCurrentCity');

export const getOffers = createAction('offers/get');

export const getNearOffers = createAction('nearOffers/get');

export const getReview = createAction('review/get');

export const getOffer = createAction<string>('offer/get');

export const dropOffer = createAction('offer/drop');
