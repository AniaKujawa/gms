import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { Card } from './shared/Card';
import { LoginForm } from './components/LoginForm';
import { StarterView } from './StarterView';

export const LoginView: FC = () => {
  const { t } = useTranslation('signing');

  return (
    <StarterView>
      <Card title={t('login')}>
        <LoginForm />
      </Card>
    </StarterView>
  );
};