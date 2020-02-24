import axios from 'axios';
//redux store
import { store } from '../../index';
//actions
import { setIsLoggedInFalse } from '../store/app/actions/AppActions';
//constants
import { BASE_URL } from '../constants/ApiUrls';
import { getCookie, history } from '../constants/helper';
import { getLoginPageUrl } from '../constants/AppUrls';

const apiService = axios.create({
	baseURL: BASE_URL,
});

const requestInterceptor = (config) => {
	config.headers['Authorization'] = `Bearer ${getCookie('ACCESS_TOKEN')}`;
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
			history.push(getLoginPageUrl(), { referrer: history.location.pathname });
			store.dispatch(setIsLoggedInFalse());
		}
	}
	return Promise.reject(error);
};

apiService.interceptors.request.use(requestInterceptor, requestInterceptorError);
apiService.interceptors.response.use(responseInterceptor, responseInterceptorError);

export { apiService };
