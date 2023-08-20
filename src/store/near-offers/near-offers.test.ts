import { expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import nearOffersSlices from './near-offers-slices.ts';
import { fetchNearOffer } from '../api-actions/near-offers-action.ts';

describe('NearOffers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      nearOffers: []
    };

    const result = nearOffersSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      nearOffers: []
    };

    const result = nearOffersSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffer" to array with "nearOffers.fulfilled"', () => {
    const mockOffer = makeFakeOffer();

    const expectedState = {
      nearOffers: [mockOffer]
    };

    const result = nearOffersSlices(undefined, fetchNearOffer.fulfilled([mockOffer], '', { id: mockOffer.id }));

    expect(result).toEqual(expectedState);
  });
});
