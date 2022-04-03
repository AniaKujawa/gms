import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from './shared/Card';
import { LoginForm } from './components/LoginForm';
import { StarterView } from './StarterView';

export const LoginView: FC = () => {
  const { t } = useTranslation();

  return (
    <StarterView>
      <Card title={t('signing.login')}>
        <LoginForm />
      </Card>
    </StarterView>
  );
};