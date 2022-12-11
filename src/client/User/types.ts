export type LoginResponse = {
  token: string;
}

export type UserAPI = {
  id:	number;
  name:	string;
  first_name: string;
  last_name: string;
  email: string;
  is_musician: boolean;
  avatar_url: string;
};

export type UpdateUser = {
  first_name: string;
  last_name: string;
  name: string;
}
