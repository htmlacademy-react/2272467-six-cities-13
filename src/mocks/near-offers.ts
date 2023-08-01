import { TOffer } from '../types/offers.ts';
import { offerType } from '../constants/offer.ts';

export const nearOffers: TOffer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: offerType.Apartment,
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: offerType.Room,
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: offerType.Hotel,
    price: 210,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg'
  }
];
