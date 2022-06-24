import { Musician } from '../../types';
import { MusicianAPI } from './types';

export const formatMusician = (musician: MusicianAPI) => ({
  id: musician.id,
  active: musician.active,
  name: musician.name,
  description: musician.description,
  tags: musician.tags,
  imageUrl: musician.image_url,
  images: musician.images.map(image => ({ ...image, saved: true })),
  phoneNumber: musician.phone_number,
  contactName: musician.contact_name,
  socialLinks: musician.social_links,
});

export const formatMusicians = (musicians: MusicianAPI[]) => {
  return musicians.map(musician => formatMusician(musician));
}

export const formatApiMusician = (musician: Musician) => ({
  id: musician.id,
  active: musician.active,
  name: musician.name,
  image_url: musician.imageUrl,
  images: musician.images,
  description: musician.description,
  tags_attributes: musician.tags,
  contact_name: musician.contactName,
  phone_number: musician.phoneNumber,
  social_links: musician.socialLinks,
});