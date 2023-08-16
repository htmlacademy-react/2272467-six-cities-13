import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';

export const fetchOffer = createAsyncThunk<TOffer, Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<TOffer>(`${ApiRoute.Offers}/${id}`);

    return data;
  }
);
