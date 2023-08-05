import { AppDispatch, State } from '../../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../constants/api-route.ts';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { requireAuthorizationStatus } from '../action.ts';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationStatus(AuthorizationStatus.NotAuth));
    }
  }
);
