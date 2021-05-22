import React, { FC } from 'react';
import { Card as MCard, Button, Container } from '@material-ui/core';

import { RegisterForm } from './components/RegisterForm';
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

export const StarterView: FC = () => {
  const classes = useStyles();

  return (
    <div className='container'>
      <Container className={classes.root}>
        <Card title='Sign in' className={classes.card}>
          <RegisterForm />
        </Card>
        <Card title='Check our platform' className={classes.card}>
          <Button>Continue as a guest</Button>
        </Card>
      </Container>
    </div>
  )
};
