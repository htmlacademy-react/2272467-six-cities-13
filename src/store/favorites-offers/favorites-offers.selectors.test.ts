import { describe, expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import { NameSpace } from '../../constants/name-space.ts';
import { getFavoritesOffers, getFavoritesOffersIsLoadingStatus } from './favorites-offers-selectors.ts';

describe('FavoritesOffers selectors', () => {
  const mockFavoritesOffers = makeFakeOffer();
  const state = {
    [NameSpace.FavoritesOffers]: {
      favoritesOffers: [mockFavoritesOffers],
      isLoading: false
    }
  };

  it('should return "favoritesOffers" from state ', () => {
    const { favoritesOffers } = state[NameSpace.FavoritesOffers];
    const result = getFavoritesOffers(state);
    expect(result).toEqual(favoritesOffers);
  });

  it('should return "isLoading" status from state ', () => {
    const { isLoading } = state[NameSpace.FavoritesOffers];
    const result = getFavoritesOffersIsLoadingStatus(state);
    expect(result).toBe(isLoading);
  });
});
