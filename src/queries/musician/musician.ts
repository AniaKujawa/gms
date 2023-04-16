import { useTranslation } from 'next-i18next';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { musicianClient } from '../../client/Musician';
import { useFeedback } from '../../hooks/useFeedback';
import { Musician, MusicianImages } from '../../types';


export const useGetMusicians = (search: string) => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useQuery(['musicians', search], async () => {
    try {
      const data = await musicianClient.getMusicians(search);

      return data;
    } catch (e) {
      console.log('Couldn\'t get all musicians', e);
      handleError(new Error(t('apiErrors.getMusicians')));
    }
  });
};

export const useGetMusician = (id: string) => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useQuery(['musician', id], async () => {
    try {
      const data = await musicianClient.getMusician(id);

      return data;
    } catch (e) {
      console.log('Couldn\'t get musician', e);
      handleError(new Error(t('apiErrors.getMusicians')));
    }
  });
};

export const useGetMusicianBands = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useQuery('bands', async () => {
    try {
      const data = await musicianClient.getMusicianBands();

      return data;
    } catch (e) {
      console.log('Couldn\'t get all bands', e);
      handleError(new Error(t('apiErrors.getMusiciansBands')));
    }
  });
};

export const useCreateMusicianBand = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useMutation(async (musician: Musician) => {
    try {
      const data = await musicianClient.postMusicianBands(musician);

      return data;
    } catch (e) {
      console.log('Couldn\'t post new band', e);
      handleError(new Error(t('apiErrors.postMusicianBand')));
    }
  });
};

export const useUpdateMusicianBand = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async (musician: Musician) => {
    try {
      await musicianClient.putMusicianBands(musician);

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update band', e);
      handleError(new Error(t('apiErrors.putMusicianBand')));
    }
  });
};

export const useAddMusicianImages = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async (images: MusicianImages) => {
    try {
      await musicianClient.postMusicianImages(images);

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update images', e);
      handleError(new Error(t('apiErrors.postMusicianImages')));
    }
  });
};

export const useDeleteMusicianImage = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async ({ musicianId, imageId }: { musicianId: string, imageId: string }) => {
    try {
      await musicianClient.deleteMusicianImage(musicianId, imageId);

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t delete image', e);
      handleError(new Error(t('apiErrors.deleteMusicianImage')));
    }
  });
};

export const useActivateMusicianBand = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async (id: string) => {
    try {
      await musicianClient.activateMusicianBands(id);

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t activate band', e);
      handleError(new Error(t('apiErrors.activateBand')));
    }
  });
};

export const useDeactivateMusicianBand = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async (id: string) => {
    try {
      await musicianClient.deactivateMusicianBands(id);

      queryClient.invalidateQueries('musician');

      return;
    } catch (e) {
      console.log('Couldn\'t update band', e);
      handleError(new Error(t('apiErrors.deactivateBand')));
    }
  });
};

export const useGetTags = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useQuery('tags', async () => {
    try {
      const data = await musicianClient.getTags();

      return data;
    } catch (e) {
      console.log('Couldn\'t get all tags', e);
      handleError(new Error(t('apiErrors.getTags')));
    }
  });
};