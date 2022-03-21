import { MusicianAPI } from './types';

export const formatMusician = (musician: MusicianAPI) => ({
  id: musician.id,
  name: musician.name,
  description: musician.description,
  tags: musician.tags,
  imageUrl: musician.image_url,
  phoneNumber: musician.phone_number,
  contactName: musician.contact_name,
  socialLinks: musician.social_links,
});

export const formatMusicians = (musicians: MusicianAPI[]) => {
  return musicians.map(musician => formatMusician(musician));
}