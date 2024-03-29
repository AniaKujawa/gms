import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Button } from './shared/Button';
import { Card } from './shared/Card';
import { useStyles } from './StarterView.styles';

export const StarterView: FC= ({ children }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className='container'>
      <Container maxWidth='md' className={classes.root}>
        {children}
        <Card title={t('signing.checkPlatform')}>
          <Button>
            <Link className={classes.link} to='/'>
              {t('signing.guestContinue')}
            </Link>
          </Button>
        </Card>
      </Container>
    </div>
  )
};
