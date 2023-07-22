import { TCity } from '../types/offers.ts';

export const cities: TCity[] = [
  {
    id: crypto.randomUUID(),
    name: 'Paris',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Cologne',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name:  'Brussels',
    location: {
      latitude: 90.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Amsterdam',
    location: {
      latitude: 12.3909553943508,
      longitude: 5.85309666406198,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Hamburg',
    location: {
      latitude: 32.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Dusseldorf',
    location: {
      latitude: 51.3909553943508,
      longitude: 42.85309666406198,
      zoom: 5
    }
  }
];
