const BASE_URL = process.env.REACT_APP_API_URL || 'https://gdziemojeskrzypce-api.herokuapp.com';

export const endpoints = {
  users: `${BASE_URL}/users`,
  signIn: `${BASE_URL}/profile/sign_in`,
  bands: `${BASE_URL}/bands`,
  userBands: `${BASE_URL}/profile/bands`,
  tags: `${BASE_URL}/tags`,
};
