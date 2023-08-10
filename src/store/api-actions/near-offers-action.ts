import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { setNearOffers } from '../slices/near-offers-slices.ts';


export const fetchNearOffer = createAsyncThunk<void, Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    dispatch(setNearOffers(data));
  }
);
