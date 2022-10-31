import { UserPayload } from "../../types";
import { UserAPI } from "./types";

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

export const formatUserData = (user: UserAPI) => ({
  id: user.id,
  name: user.name,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  musician: user.is_musician,
  avatar: user.avatar_url,
});