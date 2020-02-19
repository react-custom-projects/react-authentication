import { apiService } from './HttpService';
import { getCurrentLoggedInAgentUrl, getLoginUrl } from '../constants/ApiUrls';

class AuthService {
	static getCurrentLoggedInAgent() {
		return apiService({
			method: 'GET',
			url: getCurrentLoggedInAgentUrl(),
		});
	}
	static userLogin({ username, password }) {
		return apiService({
			method: 'POST',
			url: getLoginUrl(),
			data: { username, password },
		});
	}
}

export default AuthService;
