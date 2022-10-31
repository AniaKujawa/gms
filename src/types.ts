export type User = {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  musician: boolean;
  avatar: string;
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

export type Image = {
  id: string;
  url: string;
};

export type SocialLinks = {
  fb?: string;
  yt?: string;
  inst?: string;
  tiktok?: string;
};

export type Musician = {
  id: string;
  active: boolean;
  name: string;
  imageUrl: string;
  description: string;
  images: Image[];
  tags: Tag[];
  contactName: string;
  phoneNumber: string;
  socialLinks: SocialLinks;
};

export type MusicianImages = {
  id: string;
  images: string[];
};

export type MaybeNoop<T> = T | (() => any);
