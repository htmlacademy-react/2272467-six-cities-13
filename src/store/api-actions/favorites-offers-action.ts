import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.ts';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offers.ts';
import { ApiRoute } from '../../constants/api-route.ts';
import { FavoriteStatus } from '../../constants/offer.ts';
import { NameSpace } from '../../constants/name-space.ts';


export const fetchFavoritesOffers = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchFavoritesOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.Favorite);

    return data;
  },
);

export const addFavorite = createAsyncThunk<TOffer, { id: TOffer['id'] }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/addFavoritesOffers`,
  async ({ id }, { extra: api }) => {
    const { data } = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${FavoriteStatus.Add}`);

    return data;
  }
);

export const deleteFavorite = createAsyncThunk<TOffer, { id: TOffer['id'] }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/deleteFavoritesOffers`,
  async ({ id }, { extra: api }) => {
    const { data } = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${FavoriteStatus.Delete}`);

    return data;
  }
);
