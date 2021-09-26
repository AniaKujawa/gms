import { Musician } from './types';

export const formatMusician = (musician: Musician) => ({
  ...musician,
  imageUrl: musician.image_url,
});