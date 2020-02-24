import { APP_CONFIG } from '../services/Config';

export const BASE_URL = APP_CONFIG.API.base;

const BASE_API_URL = '/users';

//auth
const LOGIN_URL = '/signin';
const SIGN_UP_URL = '/signup';
export const getLoginUrl = () => BASE_API_URL + LOGIN_URL;
export const getSignUpUrl = () => BASE_API_URL + SIGN_UP_URL;
