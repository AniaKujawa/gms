import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Divider,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { Menu as MenuIcon } from '@material-ui/icons';

import { PATHS } from '../../utils/consts';


export const MobileUnloggedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation(['signing', 'translation']);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick}>
        <MenuIcon color="secondary" fontSize="large" />
      </div>
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
          onClick={() => signIn(undefined, { callbackUrl: '/' })}
        >
          <Typography color="primary" >
            {t('signing:login')}
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          component={Link}
          href={PATHS.START}
        >
          <Typography color="primary" >
            {t('translation:joinUs')}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
