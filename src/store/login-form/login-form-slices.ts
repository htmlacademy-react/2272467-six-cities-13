import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/name-space.ts';

type TLoginFormState = {
  email: string | null;
  password: string | null;
}

const initialState: TLoginFormState = {
  email: null,
  password: null
};

const loginFormSlices = createSlice({
  name: NameSpace.LoginForm,
  initialState,
  reducers: {
    clearLoginForm(state) {
      state.email = null;
      state.password = null;
    },
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    updatePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    }
  }
});

export default loginFormSlices.reducer;

export const { clearLoginForm, updateEmail, updatePassword } = loginFormSlices.actions;

