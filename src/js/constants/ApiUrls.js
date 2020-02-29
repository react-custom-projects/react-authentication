import { APP_CONFIG } from '../services/Config';

export const BASE_URL = APP_CONFIG.API.base;

const BASE_API_URL = '/users';

//auth
const LOGIN_URL = '/signin';
const SIGN_UP_URL = '/signup';
const O_AUTH_URL = '/oauth';
const GOOGLE_URL = '/google';
const FACEBOOK_URL = '/facebook';
export const getLoginUrl = () => BASE_API_URL + LOGIN_URL;
export const getSignUpUrl = () => BASE_API_URL + SIGN_UP_URL;
export const getGoogleSignUpUrl = () => BASE_API_URL + O_AUTH_URL + GOOGLE_URL;
export const getFacebookSignUpUrl = () => BASE_API_URL + O_AUTH_URL + FACEBOOK_URL;
