import { Tag } from '../../types';

export type MusicianAPI = {
  id: string;
  name: string;
  image_url: string;
  description: string;
  tags_attributes: Tag[];
  contact_name: string;
  phone_number: string;
  social_links: string[];
};