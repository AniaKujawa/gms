"use client"
import { useTranslation } from "next-i18next";
import { useMutation, useQuery } from "react-query";
import { useRouter } from 'next/router';
import { userClient } from "../../client/User";
import { Login, UserPayload, UpdateUser } from '../../types';
import { useFeedback } from "../../hooks/useFeedback";
import { useUserContext } from "../../context/User";
import { useAuth } from "../auth";

export const useGetUsers = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useQuery('users', () => {
    try {
      const data = userClient.getUsers()

      return data;
    } catch (e) {
      console.log('Couldn\'t get all users', e);
      handleError(new Error(t('apiErrors.getUsers')));
    }
  });
};


export const useGetUser = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();
  const { enabled, headers } = useAuth();

  return useQuery('user', async () => {
    try {
      const data = await userClient.getUser({ headers });

      return data;
    } catch (e) {
      console.log('Couldn\'t get the user', e);
      handleError(new Error(t('apiErrors.getUser')));
    }
  }, {
    refetchOnWindowFocus: false,
    enabled,
  });
};

export const useRegisterUser = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const { setIsLoggedIn } = useUserContext();
  const { handleError, handleSuccess } = useFeedback();

  return useMutation(async (user: UserPayload) => {
    try {
      const data = await userClient.registerUser(user);

      setIsLoggedIn(true);
      handleSuccess(t('signing.registerSuccess'));
      push('/');

      return data;
    } catch (e) {
      console.log(`Can't register user`, e);
      handleError(new Error(t('apiErrors.register')));
    }
  });
};

export const useLoginUser = () => {
  const { t } = useTranslation();
  const { setIsLoggedIn } = useUserContext();
  const { push } = useRouter();
  const { handleError } = useFeedback();

  return useMutation(async (user: Login) => {
    try {
      const data = await userClient.loginUser(user);

      setIsLoggedIn(true);
      push('/');

      return data;
    } catch (e) {
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
    } catch (e) {
      console.log(`Can't recover password`, e);
      handleError(new Error(t('apiErrors.passwordRecovery')));
    }
  });
};

export const useUploadAvatar = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useMutation(async (avatar: File) => {
    try {
      const data = await userClient.uploadAvatar(avatar);

      return data;
    } catch (e) {
      console.log(`Can't upload avatar`, e);
      handleError(new Error(t('apiErrors.uploadAvatar')));
    }
  });
};

export const useUpdateUser = () => {
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  return useMutation(async (user: UpdateUser) => {
    try {
      const data = userClient.updateUser(user)

      return data;
    } catch (e) {
      console.log('Couldn\'t update user', e);
      handleError(new Error(t('apiErrors.updateUser')));
    }
  });
};
