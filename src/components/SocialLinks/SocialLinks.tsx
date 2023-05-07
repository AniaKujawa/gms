import React from 'react';

import { SocialLink } from './SocialLink';
import { Props } from './types';

export const SocialLinks = ({ socials }: Props) => {
  return (
    <>
      {Object.entries(socials).map(([social, link]) => (
        link && (<SocialLink key={social} social={social} link={link} />)
      ))}
    </>
  );
};
