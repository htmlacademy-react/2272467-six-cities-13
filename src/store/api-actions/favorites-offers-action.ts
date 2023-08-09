import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offers.ts';
import { ApiRoute } from '../../constants/api-route.ts';
import { getFavoritesOffers } from '../action.ts';

export const fetchFavoritesOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoritesOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Favorite);
    dispatch(getFavoritesOffers(data));
  },
);
