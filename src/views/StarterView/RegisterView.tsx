import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from './shared/Card';
import { RegisterForm } from './components/RegisterForm';
import { StarterView } from './StarterView';

export const RegisterView: FC = () => {
  const { t } = useTranslation();

  return (
    <StarterView>
      <Card title={t('signing.signup')}>
        <RegisterForm />
      </Card>
    </StarterView>
  );
};