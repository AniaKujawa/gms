import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card as MCard, Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { Button } from './shared/Button';
import { useStyles } from './StarterView.styles';

type CardProps = {
  title: string;
  className?: string;
}

const Card: FC<CardProps> = ({ children, title, className }) => {
  return (
    <MCard className={className}>
      <h1>{title}</h1>
      {children}
    </MCard>
  )
}

type Props = {
  isRegistered?: boolean;
};

export const StarterView: FC<Props> = ({ isRegistered }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className='container'>
      <Container maxWidth='md' className={classes.root}>
        {isRegistered ? (
          <Card title={t('signing.login')} className={classes.card}>
            <LoginForm />
          </Card>) : (
          <Card title={t('signing.signup')} className={classes.card}>
            <RegisterForm />
          </Card>)
        }
        <Card title={t('signing.checkPlatform')} className={classes.card}>
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
