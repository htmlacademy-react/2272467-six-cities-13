import { TCity } from '../types/offers.ts';

export const cities: Omit<TCity, 'location'>[] = [
  {
    id: crypto.randomUUID(),
    name: 'Paris',
  },
  {
    id: crypto.randomUUID(),
    name: 'Cologne',
  },
  {
    id: crypto.randomUUID(),
    name:  'Brussels',
  },
  {
    id: crypto.randomUUID(),
    name: 'Amsterdam',
  },
  {
    id: crypto.randomUUID(),
    name: 'Hamburg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Dusseldorf',
  }
];
