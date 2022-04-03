import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Grid } from '@material-ui/core';


import { RichTextEditor } from '../RichTextEditor';
import { FormProps } from './types';
import { Uploader } from './../Uploader';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Toolbar } from '..';
import { useStyles } from './MusicianForm.styles';
import { useGetTags } from '../../queries/musician';


export const MusicianForm: FC<FormProps> = ({ musician, onSubmit, handleCancel }) => {
  const { handleSubmit, control, errors } = useForm();
  const { data: tags } = useGetTags();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} direction="column" style={{ marginTop: 20 }}>
        <Grid item>
          <Controller
            name='name'
            control={control}
            rules={{
              required: `${t('musician.errors.blankName')}`
            }}
            defaultValue={musician?.name || ''}
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
        </Grid>
        <Grid item>
          <Controller
            name='image'
            control={control}
            defaultValue={musician?.imageUrl || ''}
            error={!!errors.image}        
            render={(
              { onChange, value }
            ) => (
              <Uploader
                filename='main-image'
                fileUrl={value ? (typeof value === 'string' ? value : URL.createObjectURL(value)) : ''}
                setFile={onChange}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name='description'
            control={control}
            defaultValue={musician?.description || ''}
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
        </Grid>
        <Grid item>
          <Controller
            name='tags'
            control={control}
            defaultValue={musician?.tags?.map(tag => ({ name: tag.name }) ) || []}
            error={!!errors.description}        
            render={(
              { onChange, value }
            ) => (
              <Autocomplete
                onChange={onChange}
                options={tags || []}
                value={value}
              />
            )}
          />
        </Grid>
      </Grid>
      <Toolbar>
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={handleCancel}
          className={classes.cancelBtn}
        >
          {t('translation.cancel')}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          {t('profile.save')}
        </Button>
      </Toolbar>
    </form>
  )
};
