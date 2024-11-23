import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Card } from './shared/Card';
import { LoginForm } from './components/LoginForm';
import { StarterView } from './StarterView';

export const LoginView: FC = () => {
  const t = useTranslations('signing');

  return (
    <StarterView>
      <Card title={t('login')}>
        <LoginForm />
      </Card>
    </StarterView>
  );
};