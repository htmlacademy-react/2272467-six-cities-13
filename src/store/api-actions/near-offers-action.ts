import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { NameSpace } from '../../constants/name-space.ts';


export const fetchNearOffer = createAsyncThunk<TOffer[], Pick<TOffer, 'id'>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchNearOffer`,
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<TOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  }
);
