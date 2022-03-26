const BASE_URL = process.env.REACT_APP_API_URL || 'https://gdziemojeskrzypce-api.herokuapp.com';

export const endpoints = {
  users: `${BASE_URL}/users`,
  signIn: `${BASE_URL}/users/sign_in`,
  bands: `${BASE_URL}/bands`,
};
