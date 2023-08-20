import { expect } from 'vitest';
import { City } from '../../constants/city.ts';
import currentCitySlices, { setCurrentCity } from './current-city-slices.ts';

describe('CurrentSorting Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentCity: City.Paris
    };

    const result = currentCitySlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentCity: City.Paris
    };

    const result = currentCitySlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set current city with "setCurrentCity" action', () => {
    const cityName = City.Amsterdam;
    const expectedState = {
      currentCity: cityName
    };

    const result = currentCitySlices(undefined, setCurrentCity(cityName));

    expect(result).toEqual(expectedState);
  });
});
