import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { setOffer, setOfferLoadingStatus } from '../slices/offer-slices.ts';

export const fetchOffer = createAsyncThunk<void, Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({ id }, { dispatch, extra: api }) => {
    dispatch(setOfferLoadingStatus(true));
    const { data } = await api.get<TOffer>(`${ApiRoute.Offers}/${id}`);
    dispatch(setOfferLoadingStatus(false));
    dispatch(setOffer(data));
  }
);
