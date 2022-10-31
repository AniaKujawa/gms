import { User } from '../../types';

export type UserContext = {
  isLoggedIn: boolean;
  user: User | null | undefined;
  isLoading: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  logout: () => void;
}