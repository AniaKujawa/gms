import { UserPayload } from "../../types";

export const parseUser = (user: UserPayload) => ({
  user: {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password: user.password,
    name: user.name,
    is_musician: user.musician,
  }
});