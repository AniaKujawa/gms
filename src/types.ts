export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type Musician = {
  name: string;
  imageUrl: string;
  description: string;
  tags: string[];
  contact: string;
};

export type MaybeNoop<T> = T | (() => any);
