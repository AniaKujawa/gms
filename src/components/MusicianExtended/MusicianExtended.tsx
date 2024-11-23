import { Typography, Box } from '@material-ui/core';
import { isEmpty } from 'lodash';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Musician } from '..';
import { SocialLinks } from '../SocialLinks';

import { StyledBox } from './MusicianExtended.styles';
import { Props } from './types';

export const MusicianExtended: FC<Props> = ({ musician }) => {
  const t = useTranslations();

  return (
    <Musician musician={musician}>
      <StyledBox>
        {musician.phoneNumber && (
          <Typography data-testid="contact">
            <>{t('musician.phoneNumber')}: {musician.contactName} - {musician.phoneNumber}</>
          </Typography>
        )}
        {!isEmpty(musician.socialLinks) && (
          <SocialLinks socials={musician.socialLinks} />
        )}
      </StyledBox>
    </Musician>
  )
}