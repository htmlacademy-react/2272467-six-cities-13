import { AppDispatch, State } from '../../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { dropToken, saveToken } from '../../services/token.ts';
import { AuthData, TUser } from '../../types/user.ts';

export const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(ApiRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<TUser, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<TUser>(ApiRoute.Login, { email, password });
    saveToken(data.token);

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);
