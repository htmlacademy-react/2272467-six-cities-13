import { TOffers } from '../types/offers.ts';
import { offerType } from '../constants/offer.ts';

export const offers: TOffers = [
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: offerType.Apartment,
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
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
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
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
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: offerType.House,
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.64536342324233,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: 'img/room.jpg'
  }
];