import { User } from '../../types';

export type UserContext = {
  user: User | null | undefined;
  isLoading: boolean;
}