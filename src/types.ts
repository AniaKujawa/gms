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

export type Tag = {
  id: number;
  name: string;
};

export type Musician = {
  id: string;
  active: boolean;
  name: string;
  imageUrl: string;
  description: string;
  tags: Tag[];
  contactName: string;
  phoneNumber: string;
  socialLinks: string[];
};

export type MusicianImages = {
  id: string;
  images: string[];
};

export type MaybeNoop<T> = T | (() => any);
