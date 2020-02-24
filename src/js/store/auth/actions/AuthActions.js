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
	RESET_AUTH_FORM,
	SET_AUTH_FORM_PASSWORD_PROPERTIES,
	SET_AUTH_FORM_EMAIL_PROPERTIES,
	SET_USER_COOKIE,
} from '../../actionTypes';
//selectors
import { AuthFormEmail, authFormPassword } from '../selectors/AuthSelectors';

export const setAuthFormEmailProperties = (value) => ({
	type: SET_AUTH_FORM_EMAIL_PROPERTIES,
	value: value,
});

export const setAuthFormPasswordProperties = (value) => ({
	type: SET_AUTH_FORM_PASSWORD_PROPERTIES,
	value: value,
});

export const resetAuthForm = () => ({
	type: RESET_AUTH_FORM,
});

export const setUserCookie = (value) => ({
	type: SET_USER_COOKIE,
	value: value,
});

export const signUpUser = () => async (dispatch, getState) => {
	try {
		const state = getState(),
			email = AuthFormEmail({ state }).value,
			password = authFormPassword({ state }).value;

		//sign up user
		const signUpResponse = await AuthService.userSignUp({ email, password });

		dispatch(setUserCookie(signUpResponse.data.token));
		dispatch(setIsLoggedInTrue());
		history.push(getHomeUrl());
		toast.success('Created new account successfully');
	} catch (e) {
		if (e.response.data.error) {
			toast.error(e.response.data.error);
		} else {
			e.response.data.details.forEach((element) => {
				toast.error(element.message);
			});
		}
	}
};

export const loginUser = () => async (dispatch, getState) => {
	try {
		const state = getState(),
			email = AuthFormEmail({ state }).value,
			password = authFormPassword({ state }).value;

		//login user
		const loginResponse = await AuthService.userLogin({ email, password });

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
			toast.error('Incorrect Email or Password');
		} else {
			e.response.data.details.forEach((element) => {
				toast.error(element.message);
			});
		}
	}
};
