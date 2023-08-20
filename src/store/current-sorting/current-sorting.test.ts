import { expect } from 'vitest';
import currentSortingSlices, { setCurrentSorting } from './current-sorting-slices.ts';
import { SortingType } from '../../constants/sort-description.ts';

describe('CurrentSorting Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentSorting: SortingType.Popular
    };

    const result = currentSortingSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentSorting: SortingType.Popular
    };

    const result = currentSortingSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set current sorting with "setCurrentSorting" action', () => {
    const typeSorting = SortingType.Popular;
    const expectedState = {
      currentSorting: typeSorting
    };

    const result = currentSortingSlices(undefined, setCurrentSorting(typeSorting));

    expect(result).toEqual(expectedState);
  });
});
