import React, { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl'

import { Button } from './shared/Button';
import { Card } from './shared/Card';
import { StyledContainer } from './StarterView.styles';

export const StarterView: FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations('signing');

  return (
    <StyledContainer component="main" maxWidth="xs">
      {children}
      <Card title={t('checkPlatform')}>
        <Button>
          <Link href='/'>
            {t('guestContinue')}
          </Link>
        </Button>
      </Card>
    </StyledContainer>
  )
};
