import { apiService } from './HttpService';
import { getLoginUrl } from '../constants/ApiUrls';

class AuthService {
	static userLogin({ username, password }) {
		return apiService({
			method: 'POST',
			url: getLoginUrl(),
			data: { email: username, password },
		});
	}
}

export default AuthService;
