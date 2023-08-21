import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offers.ts';
import { ApiRoute } from '../../constants/api-route.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const fetchOffers = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Offers);

    return data;
  },
);
