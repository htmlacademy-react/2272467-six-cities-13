import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { getAuthorizationStatus, getUser } from './user-selectors.ts';

describe('User selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    }
  };

  it('should return "authorizationStatus" from state ', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toEqual(authorizationStatus);
  });

  it('should return "user" from state ', () => {
    const { user } = state[NameSpace.User];
    const result = getUser(state);
    expect(result).toEqual(user);
  });
});
