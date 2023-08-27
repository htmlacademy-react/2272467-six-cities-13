import { expect } from 'vitest';
import loginFormSlices, { clearLoginForm, updateEmail, updatePassword } from './login-form-slices.ts';

describe('LoginForm Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      email: null,
      password: null
    };

    const result = loginFormSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      email: null,
      password: null
    };

    const result = loginFormSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update email with "updateEmail" action', () => {
    const testEmail = 'test@mail.com';
    const expectedState = {
      email: testEmail,
      password: null
    };

    const result = loginFormSlices(undefined, updateEmail(testEmail));

    expect(result).toEqual(expectedState);
  });

  it('should update password with "updatePassword" action', () => {
    const testPassword = '12fefwefwe';
    const expectedState = {
      email: null,
      password: testPassword
    };

    const result = loginFormSlices(undefined, updatePassword(testPassword));

    expect(result).toEqual(expectedState);
  });


  it('should return clear login form with "clearLoginForm" action', () => {
    const testEmail = 'test@mail.com';
    const testPassword = '12fefwefwe';
    const initialState = {
      email: testEmail,
      password: testPassword
    };

    const expectedState = {
      email: null,
      password: null
    };

    const result = loginFormSlices(initialState, clearLoginForm());

    expect(result).toEqual(expectedState);
  });
});
