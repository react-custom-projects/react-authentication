import { apiService } from './HttpService';
import {
	getLoginUrl,
	getSignUpUrl,
	getGoogleSignUpUrl,
	getFacebookSignUpUrl,
} from '../constants/ApiUrls';

class AuthService {
	static userSignUp({ email, password }) {
		return apiService({
			method: 'POST',
			url: getSignUpUrl(),
			data: { email, password },
		});
	}
	static userLogin({ email, password }) {
		return apiService({
			method: 'POST',
			url: getLoginUrl(),
			data: { email, password },
		});
	}
	static userGoogleSignup(access_token) {
		return apiService({
			method: 'POST',
			url: getGoogleSignUpUrl(),
			data: { access_token },
		});
	}
	static userFacebookSignup(access_token) {
		return apiService({
			method: 'POST',
			url: getFacebookSignUpUrl(),
			data: { access_token },
		});
	}
}

export default AuthService;
