import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from 'react-query';
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

export const useGetMusicianBands = (id?: number) => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  
  return useQuery(['bands', id], async () => {
    try {
      if(id) {
        const data = await musicianClient.getMusicianBands(id);

        return data;
      }
    } catch(e) {
      console.log('Couldn\'t get all bands', e);
      handleError(new Error(t('apiErrors.getMusiciansBands')));
    }
  }, { enabled: !!id });
};

export const useCreateMusicianBand = (id?: number) => {
  const { t } = useTranslation();
  const { push } = useHistory(); 
  const { handleError } = useFeedback();

  return useMutation(async(musician: Musician) => {
    try {
      if(id) {
        const data = await musicianClient.postMusicianBands(id, musician);

        push(`${PATHS.BANDS}/${data?.id}`)

        return data;
      }
    } catch(e) {
      console.log('Couldn\'t post new band', e);
      handleError(new Error(t('apiErrors.postMusicianBand')));
    }
  });
};

export const useUpdateMusicianBand = (id?: number) => {
  const { t } = useTranslation();
  const { push } = useHistory(); 
  const { handleError } = useFeedback();

  return useMutation(async(musician: Musician) => {
    try {
      if(id) {
        const data = await musicianClient.putMusicianBands(id, musician);

        push(`${PATHS.BANDS}/${data?.id}`)

        return data;
      }
    } catch(e) {
      console.log('Couldn\'t updateband', e);
      handleError(new Error(t('apiErrors.putMusicianBand')));
    }
  });
};