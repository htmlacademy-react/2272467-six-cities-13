import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../constants/city.ts';
import { NameSpace } from '../../constants/name-space.ts';

type TCurrentCityState = {
  currentCity: City;
}

const initialState: TCurrentCityState = {
  currentCity: City.Paris
};

const currentCitySlices = createSlice({
  name: NameSpace.CurrentCity,
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    }
  }
});

export default currentCitySlices.reducer;

export const { setCurrentCity } = currentCitySlices.actions;

