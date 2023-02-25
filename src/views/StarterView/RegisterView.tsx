import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { Card } from './shared/Card';
import { RegisterForm } from './components/RegisterForm';
import { StarterView } from './StarterView';

export const RegisterView: FC = () => {
  const { t } = useTranslation('signing');

  return (
    <StarterView>
      <Card title={t('signup')}>
        <RegisterForm />
      </Card>
    </StarterView>
  );
};