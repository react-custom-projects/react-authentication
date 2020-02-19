//utilities
import { updateObject } from '../../utility';
//constants
import { validateRequired } from '../../../constants/CustomValidators';
import { setCookie } from '../../../constants/helper';
//action types
import {
	RESET_LOGIN_FORM,
	SET_LOGIN_FORM_PASSWORD_PROPERTIES,
	SET_LOGIN_FORM_USERNAME_PROPERTIES,
	SET_USER_COOKIE,
} from '../../actionTypes';

const initialState = {
	username: {
		value: '',
		displayErrors: {
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
		case SET_LOGIN_FORM_USERNAME_PROPERTIES: {
			const isRequiredError = validateRequired(action.value);
			return updateObject(state, {
				username: {
					value: action.value,
					valid: !isRequiredError,
					touched: true,
					displayErrors: { isRequiredError: isRequiredError },
				},
			});
		}
		case SET_LOGIN_FORM_PASSWORD_PROPERTIES: {
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
		case RESET_LOGIN_FORM: {
			return initialState;
		}
		case SET_USER_COOKIE: {
			setCookie('ACCESS_TOKEN', action.value, 1);
		}
	}
	return state;
};

export default reducer;
