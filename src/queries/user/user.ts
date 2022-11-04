import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import { userClient } from "../../client/User";
import { Login, UserPayload } from '../../types';
import { useFeedback } from "../../hooks/useFeedback";
import { useUserContext } from "../../context/User";

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


export const useGetUser = (id: number) => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  
  return useQuery(['user', id], async() => {
    try {
      const data = await userClient.getUser(id);

      return data;
    } catch(e) {
      console.log('Couldn\'t get the user', e);
      handleError(new Error(t('apiErrors.getUser')));
    }
  }, {     
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export const useRegisterUser = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { setIsLoggedIn } = useUserContext();
  const { handleError, handleSuccess } = useFeedback();
  
  return useMutation(async(user: UserPayload) => {
    try {
      const data = await userClient.registerUser(user);

      setIsLoggedIn(true);
      handleSuccess(t('signing.registerSuccess'));
      push('/');

      return data;
    } catch(e) {
      console.log(`Can't register user`, e);
      handleError(new Error(t('apiErrors.register')));
    }
  });
};

export const useLoginUser = () => {
  const { t } = useTranslation();
  const { setIsLoggedIn } = useUserContext();
  const { push } = useHistory();
  const { handleError } = useFeedback();
  
  return useMutation(async (user: Login) => {
    try {
      const data = await userClient.loginUser(user);

      setIsLoggedIn(true);
      push('/');

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

export const useUploadAvatar = () => {
  const { t } = useTranslation();
  const { handleError, handleSuccess } = useFeedback();
  
  return useMutation(async (avatar: File) => {
    try {
      const data = await userClient.uploadAvatar(avatar);
      handleSuccess(t('profile.uploadAvatar'));

      return data;
    } catch(e) {
      console.log(`Can't upload avatar`, e);
      handleError(new Error(t('apiErrors.uploadAvatar')));
    }
  });
};
