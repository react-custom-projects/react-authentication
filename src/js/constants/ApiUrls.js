import { APP_CONFIG } from './Config';

export const BASE_URL = APP_CONFIG.API.base;

const BASE_API_URL = '/api';

//authentication
const LOGIN_URL = '/login';
const AGENT_MANAGEMENT_URL = '/users';
export const getLoginUrl = () => LOGIN_URL;
export const getAllAgentsUrl = () => BASE_API_URL + AGENT_MANAGEMENT_URL;
export const getAgentUrl = (userId) => `${getAllAgentsUrl()}/${userId}`;
export const getCurrentLoggedInAgentUrl = () => getAgentUrl('self');
