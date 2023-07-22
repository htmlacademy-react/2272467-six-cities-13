import { offerType } from '../constants/offer.ts';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  id: string;
  name: string;
  location: TLocation;
}

export type TOffer = {
  id: string;
  title: string;
  type: offerType;
  price: number;
  city: Omit<TCity, 'id'>;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TOffers = TOffer[];
