import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSorting } from '../../types/sorting.ts';
import { NameSpace } from '../../constants/name-space.ts';
import { SortingType } from '../../constants/sorting-type.ts';

type TCurrentSortingState = {
  currentSorting: TSorting;
}

const initialState: TCurrentSortingState = {
  currentSorting: SortingType.Popular
};

const currentSortingSlices = createSlice({
  name: NameSpace.CurrentSorting,
  initialState,
  reducers: {
    setCurrentSorting(state, action: PayloadAction<TSorting>) {
      state.currentSorting = action.payload;
    }
  }
});

export default currentSortingSlices.reducer;

export const { setCurrentSorting } = currentSortingSlices.actions;

