//utilities
import { updateObject } from '../../utility';
//constants
import { validateRequired, validateEmail } from '../../../constants/CustomValidators';
//action types
import {
	RESET_AUTH_FORM,
	SET_AUTH_FORM_PASSWORD_PROPERTIES,
	SET_AUTH_FORM_EMAIL_PROPERTIES,
	SET_USER_COOKIE,
} from '../../actionTypes';
//managers
import CookiesManager from '../../../managers/CookiesManager';

const initialState = {
	email: {
		value: '',
		displayErrors: {
			isEmailError: false,
			isRequiredError: false,
		},
		valid: false,
		touched: false,
	},
	password: {
		value: '',
		displayErrors: {
			isRequiredError: false,
		},
		valid: false,
		touched: false,
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_FORM_EMAIL_PROPERTIES: {
			const displayErrors = {
					isEmailError: validateEmail(action.value),
					isRequiredError: validateRequired(action.value),
				},
				isValid = !displayErrors.isEmailError && !displayErrors.isRequiredError;
			return updateObject(state, {
				email: {
					value: action.value,
					valid: isValid,
					touched: true,
					displayErrors: displayErrors,
				},
			});
		}
		case SET_AUTH_FORM_PASSWORD_PROPERTIES: {
			const isRequiredError = validateRequired(action.value);
			return updateObject(state, {
				password: {
					value: action.value,
					valid: !isRequiredError,
					touched: true,
					displayErrors: { isRequiredError: isRequiredError },
				},
			});
		}
		case RESET_AUTH_FORM: {
			return initialState;
		}
		case SET_USER_COOKIE: {
			CookiesManager.setCookie('ACCESS_TOKEN', action.value, 1);
		}
	}
	return state;
};

export default reducer;
