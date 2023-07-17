type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCity = {
  name: string;
  location: TLocation;
}

type TOfferType = 'Apartment' | 'Private Room' | 'House' | 'Hotel';

export type TOffer = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TOffers = TOffer[];
