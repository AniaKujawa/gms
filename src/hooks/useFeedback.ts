import { useFeedbackContext } from "../context/Feedback";

export const useFeedback = () => {
  const { setAlert } = useFeedbackContext();

  const handleError = (err: Error) => {
    setAlert({
      message: err.message || 'Something went wrong',
      warningLevel: 'error',
      isOpened: true,
    });
  };

  return { 
    handleError,
  };
};
