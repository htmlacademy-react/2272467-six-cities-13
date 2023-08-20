import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { City } from '../../constants/city.ts';
import { getCurrentCity } from './current-city-selectors.ts';

describe('CurrentCity selectors', () => {
  const cityName = City.Paris;
  const state = {
    [NameSpace.CurrentCity]: {
      currentCity: cityName
    }
  };

  it('should return "currentSorting" from state', () => {
    const { currentCity } = state[NameSpace.CurrentCity];
    const result = getCurrentCity(state);

    expect(result).toEqual(currentCity);
  });
});
