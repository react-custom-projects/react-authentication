//action types
import {
	SET_CURRENT_USER,
	SET_IS_LOGGED_IN_FALSE,
	SET_IS_LOGGED_IN_TRUE,
	TEST_ACTION,
} from '../../actionTypes';
//utilities
import { updateObject } from '../../utility';
//constants
import { getCookie, setCookie } from '../../../constants/helper';

const initialState = {
	isLoggedIn: !!getCookie('ACCESS_TOKEN'),
	currentLoggedInUser: {},
	testString: 'Initial test',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_LOGGED_IN_TRUE: {
			return updateObject(state, { isLoggedIn: true });
		}
		case SET_IS_LOGGED_IN_FALSE: {
			setCookie('ACCESS_TOKEN', '', -10);
			return updateObject(state, { isLoggedIn: false });
		}
		case SET_CURRENT_USER: {
			return updateObject(state, {
				currentLoggedInUser: action.value,
			});
		}
		case TEST_ACTION:
			return updateObject(state, { testString: 'Final test' });
		default:
			return state;
	}
};

export default reducer;
