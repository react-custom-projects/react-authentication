//cache adapter
import { setupCache } from 'axios-cache-adapter';
// axios throttler
import { throttleAdapterEnhancer } from 'axios-extensions';
import axios from 'axios';
//redux store
import { store } from '../../index';
//actions
import { setIsLoggedInFalse } from '../store/app/actions/AppActions';
//constants
import { BASE_URL } from '../constants/ApiUrls';
import { history } from '../constants/helper';
import { getSignInPageUrl } from '../constants/AppUrls';
//managers
import CookiesManager from '../managers/CookiesManager';

//create cache adapter for 5 min
const cache = setupCache({
	maxAge: 5 * 60 * 1000,
	exclude: { query: false },
});

const apiService = axios.create({
	baseURL: BASE_URL,
	headers: { 'Cache-Control': 'no-cache' },
	adapter: throttleAdapterEnhancer(cache.adapter),
});

const requestInterceptor = (config) => {
	config.headers['Authorization'] = `Bearer ${CookiesManager.getCookie('ACCESS_TOKEN')}`;
	return config;
};

const requestInterceptorError = (error) => {
	console.log('there is a request error', error);
	return Promise.reject(error);
};

const responseInterceptor = (response) => {
	console.log('response interceptor:', response);
	return response;
};

const responseInterceptorError = (error) => {
	const errorResponse = error.response;
	console.log('response interceptor error:', errorResponse);
	if (errorResponse.status === 401) {
		// Login error code, reject the promise. This is a special case
		// Apparently the framework on Symphony's side doesn't have error code so comparing the first two condition as a string... sigh
		if (
			errorResponse.data.error_description === 'User account is disabled.' || // user account
			errorResponse.data.error_description === 'User account is locked.' || // admin account
			errorResponse.data.error_description === 'OAuth2 auth required' || // admin account
			errorResponse.data.code === 15001
		) {
			history.push(getSignInPageUrl(), { referrer: history.location.pathname });
			store.dispatch(setIsLoggedInFalse());
		}
	}
	return Promise.reject(error);
};

apiService.interceptors.request.use(requestInterceptor, requestInterceptorError);
apiService.interceptors.response.use(responseInterceptor, responseInterceptorError);

export { apiService };
