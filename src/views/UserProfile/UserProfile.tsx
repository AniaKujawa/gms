import React, { FC } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/Clear';
import { Card, Container, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { LoadingLayout } from '../../layout/LoadingLayout';
import { useUserContext } from '../../context/User';
import { Avatar } from './../../components';

import { useStyles } from './UserProfile.styles';


export const UserProfile: FC = () => {
  const { user, isLoading } = useUserContext();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LoadingLayout isLoading={isLoading}>
      <Container>
        { 
          user?.id ? (
            <Card variant="outlined" className={classes.card}>
              <Avatar className={classes.avatar} src={user.avatar}>
                {user.name}
              </Avatar>
              <Grid container direction='column'>
                <div className={classes.names}>
                  {user.firstName} {user.lastName}
                </div>
                <div>{user.name}</div>
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
