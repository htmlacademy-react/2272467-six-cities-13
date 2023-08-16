import { State } from '../../types/state.ts';
import { City } from '../../constants/city.ts';

export const getCurrentCity = (state: State): City => state.currentCity.currentCity;
