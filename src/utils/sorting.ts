import { TOffer } from '../types/offers.ts';
import { TSorting } from '../types/sorting.ts';

function sortByRating(a: TOffer, b: TOffer) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: TOffer, b: TOffer) {
  return a.price - b.price;
}

function sortHighToLow(a: TOffer, b: TOffer) {
  return b.price - a.price;
}

export const sorting: Record<TSorting, (offers: TOffer[]) => TOffer[]> = {
  Popular: (offers: TOffer[]) => [...offers],
  PriceHighToLow: (offers: TOffer[]) => [...offers].sort(sortHighToLow),
  PriceLowToHigh: (offers: TOffer[]) => [...offers].sort(sortLowToHigh),
  TopRatedFirst: (offers: TOffer[]) => [...offers].sort(sortByRating)
};
