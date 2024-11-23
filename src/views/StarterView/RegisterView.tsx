import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Card } from './shared/Card';
import { RegisterForm } from './components/RegisterForm';
import { StarterView } from './StarterView';

export const RegisterView: FC = () => {
  const t = useTranslations('signing');

  return (
    <StarterView>
      <Card title={t('signup')}>
        <RegisterForm />
      </Card>
    </StarterView>
  );
};