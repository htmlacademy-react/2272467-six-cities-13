import { State } from '../../types/state.ts';
import { TUser } from '../../types/user.ts';

export const getUser = (state: State): TUser | null => state.user.user;

export const getAuthorizationStatus = (state: State) => state.user.authorizationStatus;
