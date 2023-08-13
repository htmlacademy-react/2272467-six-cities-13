import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../constants/city.ts';

type TCurrentCityState = {
  currentCity: City;
}

const initialState: TCurrentCityState = {
  currentCity: City.Paris
};

const currentCitySlices = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    }
  }
});

export default currentCitySlices.reducer;

export const { setCurrentCity } = currentCitySlices.actions;

