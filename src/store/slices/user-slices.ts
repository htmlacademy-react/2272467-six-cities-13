import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { TUser } from '../../types/user.ts';

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
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<TUser>) {
      state.user = action.payload;
    }
  }
});

export default authorizationStatusSlices.reducer;

export const { setAuthorizationStatus, setUser } = authorizationStatusSlices.actions;

