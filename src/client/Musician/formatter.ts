import { Musician } from './types';

export const formatMusician = (musician: Musician) => ({
  ...musician,
  imageUrl: musician.image_url,
});

export const formatMusicians = (musicians: Musician[]) => {
  return musicians.map(musician => formatMusician(musician));
}