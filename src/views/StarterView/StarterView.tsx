import React, { FC } from 'react';
import { Card as MCard, Button, Container } from '@material-ui/core';

import { RegisterForm } from './components/RegisterForm';

type CardProps = {
  title: string;
}

const Card: FC<CardProps> = ({ children, title }) => {
  return (
    <MCard>
      <h1>{title}</h1>
      {children}
    </MCard>
  )
}

export const StarterView: FC = () => {
  return (
    <div className='container'>
      <Container>
        <Card title='Sign in'>
          <RegisterForm />
        </Card>
        <Card title='Check our platform'>
          <Button>Continue as a guest</Button>
        </Card>
      </Container>
    </div>
  )
};
