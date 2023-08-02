import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/offers.ts';

export const setCurrentCity = createAction<TCity>('offers/setCurrentCity');

export const getOffers = createAction('offers/get');

export const getNearOffers = createAction('nearOffers/get');

export const getReview = createAction('review/get');
