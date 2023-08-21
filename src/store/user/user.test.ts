import { expect } from 'vitest';
import { makeFakeAuthData, makeFakeUser } from '../../utils/mocks/mocks.ts';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import userSlices from './user-slices.ts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/user-action.ts';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    };

    const result = userSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    };

    const result = userSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "user" with "authorizationStatus" to "auth" with "checkAuthAction.fulfilled"', () => {
    const mockUser = makeFakeUser();
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser
    };

    const result = userSlices(undefined, checkAuthAction.fulfilled(mockUser, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "notAuth" with "checkAuthAction.reject"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NotAuth,
      user: null
    };

    const result = userSlices(undefined, checkAuthAction.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "user" with "authorizationStatus" to "auth" with "loginAction.fulfilled"', () => {
    const mockAuthData = makeFakeAuthData();
    const mockUser = makeFakeUser();
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser
    };

    const result = userSlices(undefined, loginAction.fulfilled(mockUser, '', mockAuthData));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "notAuth" with "loginAction.reject"', () => {
    const mockAuthData = makeFakeAuthData();
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NotAuth,
      user: null
    };

    const result = userSlices(undefined, loginAction.rejected(null, '', mockAuthData));

    expect(result).toEqual(expectedState);
  });

  it('should set "user" to "null" with "authorizationStatus" to "notAuth" with "checkAuthAction.fulfilled"', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser
    };

    const expectedState = {
      authorizationStatus: AuthorizationStatus.NotAuth,
      user: null
    };

    const result = userSlices(initialState, logoutAction.fulfilled(undefined, '', undefined));

    expect(result).toEqual(expectedState);
  });
});
