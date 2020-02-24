import { apiService } from './HttpService';
import { getLoginUrl, getSignUpUrl } from '../constants/ApiUrls';

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
}

export default AuthService;
