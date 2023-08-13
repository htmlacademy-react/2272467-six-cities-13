import { State } from '../../types/state.ts';
import { TSorting } from '../../types/sorting.ts';

export const getCurrentSorting = (state: State): TSorting => state.currentSorting.currentSorting;
