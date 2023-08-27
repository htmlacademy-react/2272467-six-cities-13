import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { getLoginForm } from './login-form.selectors.ts';

describe('LoginForm selectors', () => {
  const testEmail = 'test@mail.com';
  const testPassword = '12fefwefwe';
  const state = {
    [NameSpace.LoginForm]: {
      email: testEmail,
      password: testPassword
    }
  };

  it('should return "loginForm" from state ', () => {
    const loginForm = state[NameSpace.LoginForm];
    const result = getLoginForm(state);
    expect(result).toEqual(loginForm);
  });
});
