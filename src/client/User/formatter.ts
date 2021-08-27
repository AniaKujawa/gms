import { User } from "../../types";

export const parseUser = (user: User) => ({
  user: {
    'first_name': user.firstName,
    'last_name': user.lastName,
    email: user.email,
    password: user.password,
    username: user.username
  }
});