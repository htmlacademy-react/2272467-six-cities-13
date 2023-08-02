import { OfferType } from '../constants/offer.ts';
import { City } from '../constants/city.ts';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: City;
  location: TLocation;
}

export type TOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
