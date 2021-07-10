import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card as MCard, Container } from '@material-ui/core';

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

export const StarterView: FC = () => {
  const classes = useStyles();
  const [ isRegistered, setIsRegistered ] = useState(false);

  return (
    <div className='container'>
      <Container maxWidth='md' className={classes.root}>
        {isRegistered ? (
          <Card title='Log in' className={classes.card}>
            <LoginForm setIsRegistered={setIsRegistered}  />
          </Card>) : (
          <Card title='Sign in' className={classes.card}>
            <RegisterForm setIsRegistered={setIsRegistered} />
          </Card>)
        }
        <Card title='Check our platform' className={classes.card}>
          <Button
            color='secondary'
          >
            <Link className={classes.link} to='/dashboard'>Continue as a guest</Link>
          </Button>
        </Card>
      </Container>
    </div>
  )
};
