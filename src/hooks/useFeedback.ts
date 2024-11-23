import { useTranslations } from 'next-intl';
import { useFeedbackContext } from "../context/Feedback";

export const useFeedback = () => {
  const { setAlert } = useFeedbackContext();
  const t = useTranslations(['apiErrors', 'translation']);

  const handleError = (err: Error) => {
    setAlert({
      message: err.message || t('apiErrors:default'),
      warningLevel: 'error',
      isOpened: true,
    });
  };

  const handleSuccess = (msg: string) => {
    setAlert({
      message: msg || t('translation:defaultSuccess'),
      warningLevel: 'success',
      isOpened: true,
    });
  };

  return {
    handleError,
    handleSuccess
  };
};
