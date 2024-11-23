import React, { FC } from 'react';
// import { useTranslations } from 'next-intl';

import { useUploadAvatar } from '../../queries/user';
import { Tooltip } from '../../components';

import { StyledAvatar, StyledWrapper } from './AvatarUploader.styles';

type Props = {
  url: string;
  name: string;
};

export const AvatarUploader: FC<Props> = ({ url, name }) => {
  // const t = useTranslations('profile');
  const { mutate } = useUploadAvatar();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      mutate(e.target.files[0]);
    }
  }

  return (
    <StyledWrapper>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="button-file"
        type="file"
        onChange={handleFileChange}
      />
      <Tooltip
        title={'uploadAvatarTooltip' || 'Click to upload new photo'}
      >
        <label htmlFor="button-file">
          <StyledAvatar src={url}>
            {name}
          </StyledAvatar>
        </label>
      </Tooltip>
    </StyledWrapper>
  );
};
