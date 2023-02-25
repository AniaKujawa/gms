import React, { FC } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/Clear';
import { Card, Container, Grid } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import { LoadingLayout } from '../../layout/LoadingLayout';
import { useUserContext } from '../../context/User';
import { AvatarUploader, UserForm } from '../../components';

import { useStyles } from './UserProfileUpdate.styles';


export const UserProfileUpdate: FC = () => {
  const { user, isLoading } = useUserContext();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        { 
          user?.id ? (
            <Card variant="outlined" className={classes.card}>
              <AvatarUploader url={user.avatar} name={user.name} />
              <Grid container direction='column'>
                <UserForm user={user} />
                <div className={classes.userInfo}>
                  {t('profile.registerAsMusician')}
                  {user.musician ? <CheckBoxIcon /> : <ClearIcon />}
                </div>
              </Grid>
            </Card>
          ) : (
            <h2>You profile couldn't be displayed. Contact our service.</h2>
          )
        }
      </Container>
    </LoadingLayout>
  )
};
