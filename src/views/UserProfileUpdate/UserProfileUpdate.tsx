"use client"
import React from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/Clear';
import { Container, Grid } from '@material-ui/core';
import { useTranslations } from 'next-intl';

import { LoadingLayout } from '../../layout/LoadingLayout';
import { useUserContext } from '../../context/User';
import { AvatarUploader, UserForm } from '../../components';

import { StyledCard, StyledUserInfo } from './UserProfileUpdate.styles';


export const UserProfileUpdate = () => {
  const { user, isLoading } = useUserContext();
  const t = useTranslations('profile');

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        {
          user?.id ? (
            <StyledCard variant="outlined">
              <AvatarUploader url={user.avatar} name={user.name} />
              <Grid container direction='column'>
                <UserForm user={user} />
                <StyledUserInfo>
                  {t('registerAsMusician')}
                  {user.musician ? <CheckBoxIcon /> : <ClearIcon />}
                </StyledUserInfo>
              </Grid>
            </StyledCard>
          ) : (
            <h2>You profile couldn't be displayed. Contact our service.</h2>
          )
        }
      </Container>
    </LoadingLayout>
  )
};
