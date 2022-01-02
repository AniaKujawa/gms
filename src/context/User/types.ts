import { User } from '../../types';

export type UserContext = {
  isLoggedIn: boolean,
  user: User | null,
  setIsLoggedIn: (logged: boolean) => void,
  logout: () => void,
}