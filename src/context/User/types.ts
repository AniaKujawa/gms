import { AxiosPromise } from 'axios';

import { LoginResponse } from './../../client/User/types';
import { User, MaybeNoop, Login } from '../../types';

export type UserContext = {
  isLoggedIn: boolean,
  user: User | {},
  login: MaybeNoop<(data: Login) => AxiosPromise<LoginResponse>>,
  register: MaybeNoop<(data: User) => AxiosPromise<LoginResponse>>,
  recoverPassword: MaybeNoop<(email: string) => AxiosPromise<void>>,
}