import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offers.ts';
import { getOffer, getOffers } from '../action.ts';
import { ApiRoute } from '../../constants/api-route.ts';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Offers);
    dispatch(getOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer>(`${ApiRoute.Offers}/${id}`);

    dispatch(getOffer(data));
  }
);
