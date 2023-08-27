import { State } from '../../types/state.ts';
import { TUser } from '../../types/user.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getUser = (state: Pick<State, NameSpace.User>): TUser | null => state[NameSpace.User].user;

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].authorizationStatus;
