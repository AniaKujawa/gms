import { Tag, Image } from '../../types';

export type MusicianAPI = {
  id: string;
  active: boolean;
  name: string;
  image_url: string;
  description: string;
  images: Image[];
  tags: Tag[];
  contact_name: string;
  phone_number: string;
  social_links: string[];
};