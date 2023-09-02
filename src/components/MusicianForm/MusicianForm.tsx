import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { Button, TextField, Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';

import { Props } from '../RichTextEditor/types';
import { FormProps } from './types';
import { MusicianUploader } from './../MusicianUploader';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Toolbar } from '..';
import { useStyles } from './MusicianForm.styles';
import { useGetTags } from '../../queries/musician';
import { URL_REGEX } from '../../utils/musicianForm';


export const MusicianForm: FC<FormProps> = ({ musician, onSubmit, handleCancel }) => {
  const { handleSubmit, control, errors } = useForm();
  const { data: tags } = useGetTags();
  const classes = useStyles();
  const { t } = useTranslation(['musician', 'profile', 'translation']);

  const RichTextEditor = dynamic<Props>(() => import('../RichTextEditor').then(mod => mod.RichTextEditor), {
    ssr: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} direction="column" style={{ marginTop: 20 }}>
        <Grid item>
          <Controller
            name='name'
            control={control}
            rules={{
              required: `${t('musician:errors.blankName')}`
            }}
            defaultValue={musician?.name || ''}
            error={!!errors.name}
            render={(
              { onChange, value }
            ) => (
              <TextField
                label={t('musician:name')}
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
            name='images'
            control={control}
            defaultValue={[]}
            error={!!errors.images}
            render={(
              { onChange, value }
            ) => (
              <MusicianUploader
                musician={musician}
                values={value}
                setValues={onChange}
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
            defaultValue={musician?.tags?.map(tag => ({ name: tag.name })) || []}
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
        <Grid item>
          <h3>{t('musician:socials')}</h3>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Controller
                name="socialLinks.fb"
                rules={{
                  pattern: URL_REGEX
                }}
                control={control}
                defaultValue={musician?.socialLinks?.fb || ''}
                error={!!errors.socialLinks?.fb}
                render={(
                  { onChange, value }
                ) => (
                  <TextField
                    fullWidth
                    label="Facebook"
                    type='text'
                    onChange={onChange}
                    value={value}
                    helperText={errors.socialLinks?.fb ? t('musician:urlValidation') : null}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="socialLinks.yt"
                rules={{
                  pattern: URL_REGEX
                }}
                control={control}
                defaultValue={musician?.socialLinks?.yt || ''}
                error={!!errors.socialLinks?.yt}
                render={(
                  { onChange, value }
                ) => (
                  <TextField
                    fullWidth
                    label="Youtube"
                    type='text'
                    onChange={onChange}
                    value={value}
                    helperText={errors.socialLinks?.yt ? t('musician:urlValidation') : null}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="socialLinks.inst"
                rules={{
                  pattern: URL_REGEX
                }}
                type="url"
                control={control}
                defaultValue={musician?.socialLinks?.inst || ''}
                error={!!errors.socialLinks?.inst}
                render={(
                  { onChange, value }
                ) => (
                  <TextField
                    fullWidth
                    label="Instagram"
                    type='text'
                    onChange={onChange}
                    value={value}
                    helperText={errors.socialLinks?.inst ? t('musician:urlValidation') : null}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="socialLinks.tiktok"
                rules={{
                  pattern: URL_REGEX
                }}
                control={control}
                defaultValue={musician?.socialLinks?.tiktok || ''}
                error={!!errors.socialLinks?.tiktok}
                render={(
                  { onChange, value }
                ) => (
                  <TextField
                    fullWidth
                    label="Tiktok"
                    type="text"
                    onChange={onChange}
                    value={value}
                    helperText={errors.socialLinks?.tiktok ? t('musician:urlValidation') : null}
                  />
                )}
              />
            </Grid>
          </Grid>
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
          {t('translation:cancel')}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          {t('profile:save')}
        </Button>
      </Toolbar>
    </form>
  )
};
