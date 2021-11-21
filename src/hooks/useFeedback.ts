import { useTranslation } from 'react-i18next';
import { useFeedbackContext } from "../context/Feedback";

export const useFeedback = () => {
  const { setAlert } = useFeedbackContext();
  const { t } = useTranslation();

  const handleError = (err: Error) => {
    setAlert({
      message: err.message || t('apiErrors.default'),
      warningLevel: 'error',
      isOpened: true,
    });
  };

  const handleSuccess = (msg: string) => {
    setAlert({
      message: msg || t('translation.defaultSuccess'),
      warningLevel: 'success',
      isOpened: true,
    });
  };

  return { 
    handleError,
    handleSuccess
  };
};
