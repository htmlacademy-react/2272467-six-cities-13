import { expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import offerSlices, { dropOffer } from './offer-slices.ts';
import { fetchOffer } from '../api-actions/offer-action.ts';

describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: null,
      isLoading: false,
      hasError: false
    };

    const result = offerSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      offer: null,
      isLoading: false,
      hasError: false
    };

    const result = offerSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should drop offer with "dropOffer" action', () => {
    const mockOffer = makeFakeOffer();
    const initialState = {
      offer: mockOffer,
      isLoading: false,
      hasError: true
    };

    const expectedState = {
      offer: null,
      isLoading: false,
      hasError: false
    };

    const result = offerSlices(initialState, dropOffer());

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true" with fetch fetchOffer.pending', () => {
    const expectedState = {
      offer: null,
      isLoading: true,
      hasError: false
    };

    const result = offerSlices(undefined, fetchOffer.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to object with "isLoading" to "false" with "fetchOffer.fulfilled"', () => {
    const initialState = {
      offer: null,
      isLoading: true,
      hasError: false
    };

    const mockOffer = makeFakeOffer();

    const expectedState = {
      offer: mockOffer,
      isLoading: false,
      hasError: false
    };

    const result = offerSlices(initialState, fetchOffer.fulfilled(mockOffer, '', { id: mockOffer.id }));

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to "true" with "isLoading" to "false" with "fetchOffer.reject"', () => {
    const initialState = {
      offer: null,
      isLoading: true,
      hasError: false
    };

    const expectedState = {
      offer: null,
      isLoading: false,
      hasError: true
    };

    const result = offerSlices(initialState, fetchOffer.rejected);

    expect(result).toEqual(expectedState);
  });
});
