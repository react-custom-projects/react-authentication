//services
import AuthService from '../../../services/AuthService';
//helpers
import { history } from '../../../constants/helper';
//actions
import { setIsLoggedInTrue } from '../../app/actions/AppActions';
//constants
import { getHomeUrl } from '../../../constants/AppUrls';
//toast
import { toast } from 'react-toastify';
//action types
import {
	RESET_LOGIN_FORM,
	SET_LOGIN_FORM_PASSWORD_PROPERTIES,
	SET_LOGIN_FORM_USERNAME_PROPERTIES,
	SET_USER_COOKIE,
} from '../../actionTypes';

export const setLoginFormUserNameProperties = (value) => ({
	type: SET_LOGIN_FORM_USERNAME_PROPERTIES,
	value: value,
});

export const setLoginFormPasswordProperties = (value) => ({
	type: SET_LOGIN_FORM_PASSWORD_PROPERTIES,
	value: value,
});

export const resetLoginForm = () => ({
	type: RESET_LOGIN_FORM,
});

export const setUserCookie = (value) => ({
	type: SET_USER_COOKIE,
	value: value,
});

export const loginUser = ({ username, password }) => async (dispatch) => {
	try {
		//login user
		const loginResponse = await AuthService.userLogin({ username, password });
		dispatch(setUserCookie(loginResponse.data.token));
		dispatch(setIsLoggedInTrue());
		toast.success('Logged in successfully');

		//get previous location if it exist and push
		//to that url, otherwise go to search page
		if (history.location.state && history.location.state.referrer) {
			let referrer = history.location.state.referrer;
			history.push(referrer);
		} else {
			history.push(getHomeUrl());
		}
	} catch (e) {
		if (e.response.status === 401) {
			toast.error('Email or password is incorrect');
		} else {
			e.response.data.details.forEach((element) => {
				toast.error(element.message);
			});
		}
	}
};
