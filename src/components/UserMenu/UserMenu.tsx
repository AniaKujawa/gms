import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';
import { useUserContext } from '../../context/User';
import { PATHS } from '../../utils/consts';


export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
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
          <Avatar /> {t('menu.bands')}
        </MenuItem>
        <MenuItem
          component={Link}
          to={PATHS.PROFILE}
        >
          <Avatar /> {t('menu.account')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          {t('menu.logout')}
        </MenuItem>
      </Menu>
    </>
  );
}
