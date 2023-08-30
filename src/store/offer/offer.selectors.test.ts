import { describe, expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import { NameSpace } from '../../constants/name-space.ts';
import {
  getOffer, getOfferErrorStatus, getOfferIsLoadingStatus, getSelectedOffer
} from './offer-selectors.ts';

describe('Offer selectors', () => {
  const mockOffer = makeFakeOffer();
  const state = {
    [NameSpace.Offer]: {
      offer: mockOffer,
      isLoading: true,
      hasError: false,
      selectedOffer: mockOffer.id
    }
  };

  it('should return "offer" from state ', () => {
    const { offer } = state[NameSpace.Offer];
    const result = getOffer(state);
    expect(result).toEqual(offer);
  });

  it('should return "isLoading" status from state ', () => {
    const { isLoading } = state[NameSpace.Offer];
    const result = getOfferIsLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return "hasError" status from state ', () => {
    const { hasError } = state[NameSpace.Offer];
    const result = getOfferErrorStatus(state);
    expect(result).toBe(hasError);
  });

  it('should return "selectedOffer" from state ', () => {
    const { selectedOffer } = state[NameSpace.Offer];
    const result = getSelectedOffer(state);
    expect(result).toEqual(selectedOffer);
  });
});
