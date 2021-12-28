import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';


import { RichTextEditor } from '../RichTextEditor';
import { Props } from './types';
import { Uploader } from './../Uploader';


export const MusicianForm: FC<Props> = ({ musician }) => {
  const { handleSubmit, control, errors } = useForm();
  const { t } = useTranslation();
  const onSubmit = () => {
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='name'
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={musician.name}
        error={!!errors.name}        
        render={(
          { onChange, value }
        ) => (
          <TextField
            label={t('musician.name')}
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.name?.message}
          />
        )}
      />
      <Controller
        name='image'
        control={control}
        rules={{
          required: true,
        }}
        defaultValue={musician.imageUrl}
        error={!!errors.image}        
        render={(
          { onChange, value }
        ) => (
          <Uploader
            filename='main-image'
            fileUrl={typeof value === 'string' ? value : URL.createObjectURL(value)}
            setFile={onChange}
          />
        )}
      />  
      <Controller
        name='description'
        control={control}
        defaultValue={musician.description}
        error={!!errors.description}        
        render={(
          { onChange, value }
        ) => (
          <RichTextEditor
            onChange={onChange}
            html={value}
          />
        )}
      />
    </form>
  )
};
