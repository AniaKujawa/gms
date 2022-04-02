import { useTranslation } from 'react-i18next';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { musicianClient } from '../../client/Musician';
import { useFeedback } from '../../hooks/useFeedback';
import { Musician } from '../../types';
import { PATHS } from '../../utils/consts';


export const useGetMusicians = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  
  return useQuery('musicians', async () => {
    try {
      const data = await musicianClient.getMusicians();

      return data;
    } catch(e) {
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
    } catch(e) {
      console.log('Couldn\'t get all musicians', e);
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
    } catch(e) {
      console.log('Couldn\'t get all bands', e);
      handleError(new Error(t('apiErrors.getMusiciansBands')));
    }
  });
};

export const useCreateMusicianBand = () => {
  const { t } = useTranslation();
  const { push } = useHistory(); 
  const { handleError } = useFeedback();

  return useMutation(async(musician: Musician) => {
    try {
      const data = await musicianClient.postMusicianBands(musician);

      push(`${PATHS.BANDS}/${data?.id}`);

      return data;
    } catch(e) {
      console.log('Couldn\'t post new band', e);
      handleError(new Error(t('apiErrors.postMusicianBand')));
    }
  });
};

export const useUpdateMusicianBand = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { handleError } = useFeedback();

  return useMutation(async(musician: Musician) => {
    try {
      await musicianClient.putMusicianBands(musician);

      queryClient.invalidateQueries('musician');

      return;
    } catch(e) {
      console.log('Couldn\'t update band', e);
      handleError(new Error(t('apiErrors.putMusicianBand')));
    }
  });
};