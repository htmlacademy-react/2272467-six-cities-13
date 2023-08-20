import { describe, expect } from 'vitest';
import { makeFakeOffer } from '../../utils/mocks/mocks.ts';
import { NameSpace } from '../../constants/name-space.ts';
import { getNearOffer } from './near-offers-selectors.ts';

describe('NearOffers selectors', () => {
  const mockOffers = makeFakeOffer();
  const state = {
    [NameSpace.NearOffers]: {
      nearOffers: [mockOffers]
    }
  };

  it('should return "nearOffers" from state ', () => {
    const { nearOffers } = state[NameSpace.NearOffers];
    const result = getNearOffer(state);
    expect(result).toEqual(nearOffers);
  });
});
