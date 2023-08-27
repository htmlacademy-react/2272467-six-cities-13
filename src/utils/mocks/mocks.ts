import { TOffer } from '../../types/offers.ts';
import { name, image, datatype, helpers, internet, date, lorem } from 'faker';
import { OfferType } from '../../constants/offer.ts';
import { City } from '../../constants/city.ts';
import { TAddReview, TReview } from '../../types/review.ts';
import { AuthData, TUser } from '../../types/user.ts';
import { createApi } from '../../services/api.ts';
import { Action } from 'redux';
import { State } from '../../types/state.ts';
import { ThunkDispatch } from '@reduxjs/toolkit';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeOffer = (): TOffer => ({
  id: crypto.randomUUID(),
  title: name.title(),
  type: helpers.randomize(Object.values(OfferType).map((type) => type)),
  price: datatype.number({ precision: 1 }),
  city: helpers.randomize(Object.values(City).map((item) => item)),
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number()
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5, precision: 1 }),
  previewImage: image.imageUrl(),
  description: datatype.string(),
  bedrooms: datatype.number(),
  goods: helpers.randomize([['Wi-Fi', 'Heating'], ['Washing machine', 'Air conditioning'], ['Breakfast']]),
  images: [image.imageUrl(), image.imageUrl(), image.imageUrl(), image.imageUrl()],
  maxAdults: datatype.number(),
  host: {
    email: internet.email(),
    token: crypto.randomUUID(),
    isPro: datatype.boolean()
  }
});

export const makeFakeReview = (): TReview => ({
  id: crypto.randomUUID(),
  date: String(date.soon()),
  user: {
    email: internet.email(),
    token: crypto.randomUUID(),
    isPro: datatype.boolean()
  },
  comment: lorem.text(),
  rating: datatype.number({ precision: 1 })
});

export const makeFakeReviewDataForm = (): TAddReview => ({
  comment: lorem.text(),
  rating: datatype.number({ precision: 1 })
});

export const makeFakeUser = (): TUser => ({
  name: name.title(),
  avatarUrl: image.avatar(),
  isPro: datatype.boolean(),
  email: internet.email(),
  token: crypto.randomUUID()
});

export const makeFakeAuthData = (): AuthData => ({
  login: internet.email(),
  password: internet.password()
});
