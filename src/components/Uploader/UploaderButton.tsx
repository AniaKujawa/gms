import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

type Props = {
  onChange: (file: File) => void;
};

export const UploaderButton: FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      onChange(e.target.files[0]);
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
      <label htmlFor="button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          {t('translation.upload')}
        </Button>
      </label>
   </>
 )
};
