import { APP_CONFIG } from './Config';

export const BASE_URL = APP_CONFIG.API.base;

const BASE_API_URL = '/users';

//auth
const LOGIN_URL = '/signin';
export const getLoginUrl = () => BASE_API_URL + LOGIN_URL;
