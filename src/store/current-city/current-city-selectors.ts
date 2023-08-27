import { State } from '../../types/state.ts';
import { City } from '../../constants/city.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getCurrentCity = (state: Pick<State, NameSpace.CurrentCity>): City => state[NameSpace.CurrentCity].currentCity;
