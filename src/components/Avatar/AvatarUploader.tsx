import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useUploadAvatar } from '../../queries/user';
import { Tooltip } from '../../components';

import { Avatar } from './Avatar';
import { useStyles } from './AvatarUploader.styles';

type Props = {
  url: string;
  name: string;
};

export const AvatarUploader: FC<Props> = ({ url, name }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { mutate } = useUploadAvatar();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      mutate(e.target.files[0]);
    }
  }

 return (
   <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="button-file"
        type="file"
        onChange={handleFileChange}
      />
      <Tooltip
        title={t('profile.uploadAvatar') || 'Click to upload new photo'}
      >
        <label htmlFor="button-file">
          <Avatar className={classes.avatar} src={url}>
            {name}
          </Avatar>
        </label>
      </Tooltip>
   </>
 );
};
