import { apiService } from './HttpService';
import { getLoginUrl } from '../constants/ApiUrls';

class AuthService {
	static userLogin({ email, password }) {
		return apiService({
			method: 'POST',
			url: getLoginUrl(),
			data: { email, password },
		});
	}
}

export default AuthService;
