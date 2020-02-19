//action types
import {
	SET_CURRENT_USER,
	SET_IS_LOGGED_IN_FALSE,
	SET_IS_LOGGED_IN_TRUE,
	TEST_ACTION,
} from '../../actionTypes';
//toast
import { toast } from 'react-toastify';
//services
import AuthService from '../../../services/AuthService';

export const setTestAction = () => ({
	type: TEST_ACTION,
});

export const setIsLoggedInTrue = () => ({ type: SET_IS_LOGGED_IN_TRUE });

export const setIsLoggedInFalse = () => ({ type: SET_IS_LOGGED_IN_FALSE });

export const setCurrentUser = (value) => ({
	type: SET_CURRENT_USER,
	value: value,
});

export const getCurrentUser = () => async (dispatch) => {
	try {
		const agentResponse = await AuthService.getCurrentLoggedInAgent();
		dispatch(setCurrentUser(agentResponse.data));
	} catch (e) {
		toast.error(e.response.data.message);
	}
};
