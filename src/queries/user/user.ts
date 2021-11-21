import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { userClient } from "../../client/User";
import { Login, User } from '../../types';
import { useFeedback } from "../../hooks/useFeedback";
import { useUserContext } from "../../context/User";

  // UNDER DEVELOPMENT
export const useGetUsers = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  
  return useQuery('users', () => {
    try {
      const data = userClient.getUsers()

      return data;
    } catch(e) {
      console.log('Couldn\'t get all users', e);
      handleError(new Error(t('apiErrors.getUsers')));
    }
  });
};


  // UNDER DEVELOPMENT
export const useGetUser = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  
  return useQuery('user', () => {
    try {
      const data = userClient.getUser()

      return data;
    } catch(e) {
      console.log('Couldn\'t get the user', e);
      handleError(new Error(t('apiErrors.getUser')));
    }
  }, { retry: false });
};

export const useRegisterUser = () => {
  const { t } = useTranslation();
  // const queryClient = useQueryClient();
  const { handleError, handleSuccess } = useFeedback();
  
  return useMutation(async (user: User) => {
    try {
      const data = await userClient.registerUser(user);
      handleSuccess(t('signing.registerSuccess'));
      // queryClient.invalidateQueries('user');

      return data;
    } catch(e) {
      console.log(`Can't register user`, e);
      handleError(new Error(t('apiErrors.register')));
    }
  });
};

export const useLoginUser = () => {
  const { t } = useTranslation();
  // const queryClient = useQueryClient();
  const { setIsLoggedIn } = useUserContext();
  const { push } = useHistory();
  const { handleError } = useFeedback();
  
  return useMutation(async (user: Login) => {
    try {
      const data = await userClient.loginUser(user);
      setIsLoggedIn(true);
      push('/');

      // queryClient.invalidateQueries('user');

      return data;
    } catch(e) {
      console.log(`Can't login`, e);
      handleError(new Error(t('apiErrors.login')));
    }
  });
};

export const useRecoverPassword = () => {
  const { t } = useTranslation();
  const { handleError, handleSuccess } = useFeedback();
  
  return useMutation(async (email: string) => {
    try {
      const data = await userClient.recoverPassword(email);
      handleSuccess(t('signing.lostPasswordSentEmail'));

      return data;
    } catch(e) {
      console.log(`Can't recover password`, e);
      handleError(new Error(t('apiErrors.passwordRecovery')));
    }
  });
};
