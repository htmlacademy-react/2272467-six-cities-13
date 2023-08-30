import { AppDispatch, State } from '../../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { dropToken, saveToken } from '../../services/token.ts';
import { AuthData, TUser } from '../../types/user.ts';
import { NameSpace } from '../../constants/name-space.ts';
import { fetchFavoritesOffers } from './favorites-offers-action.ts';
import { clearLoginForm } from '../login-form/login-form-slices.ts';
import { redirectToRoute } from '../action.ts';
import { AppRoute } from '../../constants/app-route.ts';
import { fetchOffers } from './offers-action.ts';

export const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TUser>(ApiRoute.Login);
    dispatch(fetchFavoritesOffers());

    return data;
  }
);

export const loginAction = createAsyncThunk<TUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUser>(ApiRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(clearLoginForm());
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dispatch(fetchOffers());
    dropToken();
  },
);
