import { State } from '../../types/state.ts';
import { TSorting } from '../../types/sorting.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getCurrentSorting = (state: Pick<State, NameSpace.CurrentSorting>): TSorting => state[NameSpace.CurrentSorting].currentSorting;
