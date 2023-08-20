import { describe, expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import { NameSpace } from '../../constants/name-space.ts';
import { getOffers, getOffersIsLoadingStatus } from './offers-selector.ts';

describe('Offers selectors', () => {
  const mockOffers = makeFakeOffer();
  const state = {
    [NameSpace.Offers]: {
      offers: [mockOffers],
      isLoading: false,
      selectedOffer: null
    }
  };

  it('should return "offers" from state ', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return "isLoading" status from state ', () => {
    const { isLoading } = state[NameSpace.Offers];
    const result = getOffersIsLoadingStatus(state);
    expect(result).toBe(isLoading);
  });
});
