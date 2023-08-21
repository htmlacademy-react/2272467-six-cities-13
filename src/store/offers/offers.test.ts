import offersSlices, { addSelectedOffer } from './offers-slices.ts';
import { expect } from 'vitest';
import { fetchOffers } from '../api-actions/offers-action.ts';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';

describe('Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: false,
      selectedOffer: null
    };

    const result = offersSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      offers: [],
      isLoading: false,
      selectedOffer: null
    };

    const result = offersSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return reviews array with "f" action', () => {
    const initialState = {
      offers: [],
      isLoading: false,
      selectedOffer: null
    };
    const id = crypto.randomUUID();

    const expectedState = {
      offers: [],
      isLoading: false,
      selectedOffer: id
    };

    const result = offersSlices(initialState, addSelectedOffer(id));

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true" with fetch fetchOffers.pending', () => {
    const expectedState = {
      offers: [],
      isLoading: true,
      selectedOffer: null
    };

    const result = offersSlices(undefined, fetchOffers.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with "isLoading" to "false" with "fetchOffers.fulfilled"', () => {
    const mockOffers = makeFakeOffer();
    const expectedState = {
      offers: [mockOffers],
      isLoading: false,
      selectedOffer: null
    };

    const result = offersSlices(
      undefined,
      fetchOffers.fulfilled([mockOffers], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
