import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box,
  Menu,
  MenuItem,
  Divider,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExitToApp, LibraryMusic, AccountBox } from '@material-ui/icons';

import { Tooltip } from '../Tooltip';
import { useUserContext } from '../../context/User';
import { PATHS } from '../../utils/consts';
import { Avatar } from '../Avatar';

import { useStyles } from './UserMenu.styles';


export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const { logout, user } = useUserContext();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small">
            <Avatar>{user?.name}</Avatar>
          </IconButton>
        </Tooltip>
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
          to={PATHS.BANDS}
        >
          <LibraryMusic className={classes.icon} /> {t('menu.bands')}
        </MenuItem>
        <MenuItem
          component={Link}
          to={PATHS.PROFILE}
        >
          <AccountBox className={classes.icon} /> {t('menu.account')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ExitToApp className={classes.icon} fontSize="small" />
          {t('menu.logout')}
        </MenuItem>
      </Menu>
    </>
  );
}
