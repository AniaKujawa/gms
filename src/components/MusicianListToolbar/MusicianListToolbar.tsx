import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { PATHS } from '../../utils/consts';

import { Toolbar } from '..';


export const MusicianListToolbar: FC = () => {
  const t = useTranslations('musician');
  const { push } = useRouter();

  return (
    <Toolbar>
      <Button
        variant="contained"
        color="primary"
        onClick={() => push(PATHS.CREATE_BAND)}
      >
        {t('createBtn')}
      </Button>
    </Toolbar>
  )
};