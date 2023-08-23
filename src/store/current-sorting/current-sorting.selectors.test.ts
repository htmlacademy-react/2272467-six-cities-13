import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { getCurrentSorting } from './current-sorting-selectors.ts';
import { SortingType } from '../../constants/sorting-type.ts';

describe('CurrentSorting selectors', () => {
  const sortingType = SortingType.Popular;
  const state = {
    [NameSpace.CurrentSorting]: {
      currentSorting: sortingType
    }
  };

  it('should return "currentSorting" from state ', () => {
    const { currentSorting } = state[NameSpace.CurrentSorting];
    const result = getCurrentSorting(state);

    expect(result).toEqual(currentSorting);
  });
});
