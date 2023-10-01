import { useTranslation } from 'next-i18next';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { musicianClient } from '../../client/Musician';
import { useFeedback } from '../../hooks/useFeedback';
import { Musician, MusicianImages } from '../../types';
import { useAuth } from '../auth';


export const useGetMusicians = (search: string) => {
  const { t } = useTranslation('apiErrors');
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useQuery(['musicians', search], async () => {
    try {
      const data = await musicianClient.getMusicians(search, { headers });

      return data;
    } catch (e) {
      console.log('Couldn\'t get all musicians', e);
      handleError(new Error(t('getMusicians')));
    }
  });
};

export const useGetMusician = (id: string) => {
  const { t } = useTranslation('apiErrors');
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useQuery(['musician', id], async () => {
    try {
      const data = await musicianClient.getMusician(id, { headers });

      return data;
    } catch (e) {
      console.log('Couldn\'t get musician', e);
      handleError(new Error(t('getMusicians')));
    }
  });
};

export const useGetMusicianBands = () => {
  const { t } = useTranslation('apiErrors');
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useQuery('bands', async () => {
    try {
      const data = await musicianClient.getMusicianBands(headers);

      return data;
    } catch (e) {
      console.log('Couldn\'t get all bands', e);
      handleError(new Error(t('getMusiciansBands')));
    }
  });
};

export const useCreateMusicianBand = () => {
  const { t } = useTranslation('apiErrors');
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async (musician: Musician) => {
    try {
      const data = await musicianClient.postMusicianBands(musician, { headers });

      return data;
    } catch (e) {
      console.log('Couldn\'t post new band', e);
      handleError(new Error(t('postMusicianBand')));
    }
  });
};

export const useUpdateMusicianBand = () => {
  const { t } = useTranslation('apiErrors');
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async (musician: Musician) => {
    try {
      await musicianClient.putMusicianBands(musician, { headers });

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update band', e);
      handleError(new Error(t('putMusicianBand')));
    }
  });
};

export const useAddMusicianImages = () => {
  const { t } = useTranslation('apiErrors');
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async (images: MusicianImages) => {
    try {
      await musicianClient.postMusicianImages(images, { headers });

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update images', e);
      handleError(new Error(t('postMusicianImages')));
    }
  });
};

export const useDeleteMusicianImage = () => {
  const { t } = useTranslation('apiErrors');
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async ({ musicianId, imageId }: { musicianId: string, imageId: string }) => {
    try {
      await musicianClient.deleteMusicianImage(musicianId, imageId, { headers });

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t delete image', e);
      handleError(new Error(t('deleteMusicianImage')));
    }
  });
};

export const useActivateMusicianBand = () => {
  const { t } = useTranslation('apiErrors');
  const router = useRouter();
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async (id: string) => {
    try {
      await musicianClient.activateMusicianBands(id, { headers });

      router.replace(router.asPath);

      return;
    } catch (e) {
      console.log('Couldn\'t activate band', e);
      handleError(new Error(t('activateBand')));
    }
  });
};

export const useDeactivateMusicianBand = () => {
  const { t } = useTranslation('apiErrors');
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();
  const { headers } = useAuth();

  return useMutation(async (id: string) => {
    try {
      await musicianClient.deactivateMusicianBands(id, { headers });

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update band', e);
      handleError(new Error(t('deactivateBand')));
    }
  });
};

export const useGetTags = () => {
  const { t } = useTranslation('apiErrors');
  const { handleError } = useFeedback();

  return useQuery('tags', async () => {
    try {
      const data = await musicianClient.getTags();

      return data;
    } catch (e) {
      console.log('Couldn\'t get all tags', e);
      handleError(new Error(t('getTags')));
    }
  });
};