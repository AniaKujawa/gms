const BASE_URL = process.env.API_URL || 'https://gdziemojeskrzypce-api.herokuapp.com';

export const endpoints = {
  users: `${BASE_URL}/users`,
  signIn: `${BASE_URL}/users/sign_in`
};
