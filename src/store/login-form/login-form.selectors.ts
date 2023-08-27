import { State } from '../../types/state.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getLoginForm = (state: Pick<State, NameSpace.LoginForm>) => state[NameSpace.LoginForm];
