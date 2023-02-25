import React, { FC } from 'react';
import Link from 'next/link';
import { Container } from '@material-ui/core';
import { useTranslation } from 'next-i18next'

import { Button } from './shared/Button';
import { Card } from './shared/Card';
import { useStyles } from './StarterView.styles';

export const StarterView: FC= ({ children }) => {
  const classes = useStyles();
  const { t } = useTranslation('signing');

  return (
    <div className='container'>
      <Container maxWidth='md' className={classes.root}>
        {children}
        <Card title={t('checkPlatform')}>
          <Button>
            <Link className={classes.link} href='/'>
              {t('guestContinue')}
            </Link>
          </Button>
        </Card>
      </Container>
    </div>
  )
};
