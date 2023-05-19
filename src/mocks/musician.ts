import { Musician } from '../types';
import imagePlaceholder from './../assets/bcg.jpg';


export const musician: Musician = {
  id: '2',
  active: true,
  name: 'Super band',
  imageUrl: '',
  tags: [{ id: 2, name: 'jazz' }, { id: 45, name: 'folklor' }],
  description: 'cos',
  contactName: 'Ela',
  images: [{
    id: '1',
    url: imagePlaceholder,
  }, {
    id: '2',
    url: imagePlaceholder,
  }, {
    id: '3',
    url: imagePlaceholder,
  }
  ],
  socialLinks: {
    fb: 'https://www.facebook.com',
    yt: 'https://www.youtube.com',
    inst: 'https://www.instagram.com',
    tiktok: 'https://www.tiktok.com',
  },
  phoneNumber: '567577889',
};
