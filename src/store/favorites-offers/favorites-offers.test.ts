import { expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import favoritesOffersSlices from './favorites-offers-slices.ts';
import { addFavorite, deleteFavorite, fetchFavoritesOffers } from '../api-actions/favorites-offers-action.ts';

describe('FavoritesOffers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoritesOffers: [],
      isLoading: false
    };

    const result = favoritesOffersSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoritesOffers: [],
      isLoading: false
    };

    const result = favoritesOffersSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true" with fetch fetchFavoritesOffers.pending', () => {
    const expectedState = {
      favoritesOffers: [],
      isLoading: true
    };

    const result = favoritesOffersSlices(undefined, fetchFavoritesOffers.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoritesOffers" to array with "isLoading" to "false" with "fetchFavoritesOffers.fulfilled"', () => {
    const mockFavoritesOffers = makeFakeOffer();

    const expectedState = {
      favoritesOffers: [mockFavoritesOffers],
      isLoading: false
    };

    const result = favoritesOffersSlices(undefined, fetchFavoritesOffers.fulfilled([mockFavoritesOffers], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should add favorites to array with "addFavorite.fulfilled"', () => {
    const mockFavoritesOffers = makeFakeOffer();

    const expectedState = {
      favoritesOffers: [mockFavoritesOffers],
      isLoading: false
    };

    const result = favoritesOffersSlices(undefined, addFavorite.fulfilled(mockFavoritesOffers, '', { id: mockFavoritesOffers.id }));

    expect(result).toEqual(expectedState);
  });

  it('should delete favorites from array with "deleteFavorites.fulfilled"', () => {
    const mockFavoritesOffers = makeFakeOffer();
    const initialState = {
      favoritesOffers: [mockFavoritesOffers],
      isLoading: false
    };

    const expectedState = {
      favoritesOffers: [],
      isLoading: false
    };

    const result = favoritesOffersSlices(initialState, deleteFavorite.fulfilled(mockFavoritesOffers, '', { id: mockFavoritesOffers.id }));

    expect(result).toEqual(expectedState);
  });
});
