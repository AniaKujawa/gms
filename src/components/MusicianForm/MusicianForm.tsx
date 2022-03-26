import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Grid } from '@material-ui/core';


import { RichTextEditor } from '../RichTextEditor';
import { Props } from './types';
import { Uploader } from './../Uploader';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Toolbar } from '..';

const tags = [
  { title: 'jazz'},
  { title: 'Wedding'},
  { title: 'Disco' },
  { title: 'pop'},
];


export const MusicianForm: FC<Props> = ({ musician }) => {
  const { handleSubmit, control, errors } = useForm();
  const { t } = useTranslation();
  const onSubmit = (values: any) => {
    console.log(values);
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} direction="column" style={{ marginTop: 20 }}>
        <Grid item>
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
        </Grid>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Controller
            name='tags'
            control={control}
            defaultValue={musician.tags.map(tag => ({ title: tag.name }) )}
            error={!!errors.description}        
            render={(
              { onChange, value }
            ) => (
              <Autocomplete
                onChange={onChange}
                options={tags}
                value={value}
              />
            )}
          />
        </Grid>
      </Grid>
      <Toolbar>
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
