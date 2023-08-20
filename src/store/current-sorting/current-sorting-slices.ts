import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingType } from '../../constants/sort-description.ts';
import { TSorting } from '../../types/sorting.ts';

type TCurrentSortingState = {
  currentSorting: TSorting;
}

const initialState: TCurrentSortingState = {
  currentSorting: SortingType.Popular
};

const currentSortingSlices = createSlice({
  name: 'currentSorting',
  initialState,
  reducers: {
    setCurrentSorting(state, action: PayloadAction<TSorting>) {
      state.currentSorting = action.payload;
    }
  }
});

export default currentSortingSlices.reducer;

export const { setCurrentSorting } = currentSortingSlices.actions;

