import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { SocialLinkProps } from './types';
import { useStyles } from './SociaLinks.styles';

const icons = new Map();
icons
  .set('inst', faInstagram)
  .set('yt', faYoutube)
  .set('fb', faFacebook)
  .set('tiktok', faTiktok)

export const SocialLink = ({ social, link }: SocialLinkProps) => {
  const classes = useStyles();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icons.get(social)} className={classes.link} />
    </a>
  );
};
