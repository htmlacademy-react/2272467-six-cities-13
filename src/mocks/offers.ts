import { TOffer } from '../types/offers.ts';
import { OfferType } from '../constants/offer.ts';
import { City } from '../constants/city.ts';

export const offers: TOffer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: OfferType.Apartment,
    price: 132,
    city: {
      name: City.Amsterdam,
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
    type: OfferType.Room,
    price: 200,
    city: {
      name: City.Amsterdam,
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
    type: OfferType.Hotel,
    price: 210,
    city: {
      name: City.Amsterdam,
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
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.House,
    price: 180,
    city: {
      name: City.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.64536342324233,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'img/room.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.House,
    price: 180,
    city: {
      name: City.Paris,
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 8
      }
    },
    location: {
      latitude: 48.8634213123,
      longitude: 2.34821312318,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'img/room.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferType.House,
    price: 180,
    city: {
      name: City.Paris,
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 8
      }
    },
    location: {
      latitude: 48.8534213123,
      longitude: 2.34821312318,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/room.jpg'
  }
];
