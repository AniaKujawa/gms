import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { musicianClient } from "../../client/Musician";
import { useFeedback } from "../../hooks/useFeedback";


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