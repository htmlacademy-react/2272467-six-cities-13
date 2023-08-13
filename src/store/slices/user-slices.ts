import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { TUser } from '../../types/user.ts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/user-action.ts';

type TUserState = {
  authorizationStatus: AuthorizationStatus;
  user: TUser | null;
}

const initialState: TUserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

const authorizationStatusSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.user = null;
      });
  }
});

export default authorizationStatusSlices.reducer;

