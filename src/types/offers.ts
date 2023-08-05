import { OfferType } from '../constants/offer.ts';
import { City } from '../constants/city.ts';
import { TUser } from './user.ts';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: keyof typeof City;
  location: TLocation;
}

type TOfferHost = Omit<TUser, 'email' | 'token'>;

export type TOffer = {
  id: string;
  title: string;
  type: keyof typeof OfferType;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];
  maxAdults: number;
  host: TOfferHost;
}
