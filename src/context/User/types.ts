import { User } from '../../types';

export type UserContext = {
  isLoggedIn: boolean,
  user: User | {},
}