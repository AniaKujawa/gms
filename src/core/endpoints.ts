const BASE_URL = process.env.REACT_APP_API_URL || 'https://gdziemojeskrzypce-api.herokuapp.com';

export const endpoints = {
  users: `${BASE_URL}/users`,
  signIn: `${BASE_URL}/profile/sign_in`,
  userBands: `${BASE_URL}/profile/bands`,
  avatar: `${BASE_URL}/profile/avatar`,
  bands: `${BASE_URL}/bands`,
  profile: `${BASE_URL}/profile`,
  tags: `${BASE_URL}/tags`,
  search: `${BASE_URL}/search`,
};
