export type User = {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  musician: boolean;
};

export type UserPayload = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  musician: boolean;
};

export type Login = {
  email: string;
  password: string;
};

export type Musician = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  tags: string[];
  contactName: string;
  phoneNumber: string;
  socialLinks: string[];
};

export type MaybeNoop<T> = T | (() => any);
