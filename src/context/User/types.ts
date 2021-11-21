import { User } from '../../types';

export type UserContext = {
  isLoggedIn: boolean,
  user: User | {},
  setIsLoggedIn: (logged: boolean) => void,
  logout: () => void,
}