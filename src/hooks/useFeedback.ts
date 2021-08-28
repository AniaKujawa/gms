import { useTranslation } from 'react-i18next';
import { useFeedbackContext } from "../context/Feedback";

export const useFeedback = () => {
  const { setAlert } = useFeedbackContext();
  const { t } = useTranslation();

  const handleError = (err: Error) => {
    setAlert({
      message: t(err.message || 'apiErrors.default'),
      warningLevel: 'error',
      isOpened: true,
    });
  };

  return { 
    handleError,
  };
};
