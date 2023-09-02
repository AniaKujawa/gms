import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Menu,
  MenuItem,
  Divider,
  IconButton,
} from '@material-ui/core';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ExitToApp, LibraryMusic, AccountBox } from '@material-ui/icons';

import { PATHS } from '../../utils/consts';
import { Avatar } from '../Avatar';

import { useStyles } from './UserMenu.styles';


export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation('menu');
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const { data } = useSession();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconButton onClick={handleClick} size="small">
          <Avatar>{data?.user?.name}</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          component={Link}
          href={PATHS.BANDS}
        >
          <LibraryMusic className={classes.icon} /> {t('bands')}
        </MenuItem>
        <MenuItem
          component={Link}
          href={PATHS.PROFILE}
        >
          <AccountBox className={classes.icon} /> {t('account')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={signOut}>
          <ExitToApp className={classes.icon} fontSize="small" />
          {t('logout')}
        </MenuItem>
      </Menu>
    </>
  );
}
