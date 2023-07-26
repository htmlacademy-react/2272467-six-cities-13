import { TCity } from '../types/offers.ts';

export const cities: TCity[] = [
  {
    id: crypto.randomUUID(),
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Cologne',
    location: {
      latitude: 50.8936,
      longitude: 7.0731,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name:  'Brussels',
    location: {
      latitude: 50.846707,
      longitude: 4.352472,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Amsterdam',
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 10
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 10
    }
  }
];
