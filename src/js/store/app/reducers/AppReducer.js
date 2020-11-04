//action types
import { SET_IS_LOGGED_IN_FALSE, SET_IS_LOGGED_IN_TRUE, TEST_ACTION } from '../../actionTypes';
//utilities
import { updateObject } from '../../utility';
//managers
import CookiesManager from '../../../managers/CookiesManager';

const initialState = {
	isLoggedIn: !!CookiesManager.getCookie('ACCESS_TOKEN'),
	testString: 'Initial test',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_LOGGED_IN_TRUE: {
			return updateObject(state, { isLoggedIn: true });
		}
		case SET_IS_LOGGED_IN_FALSE: {
			CookiesManager.setCookie('ACCESS_TOKEN', '', -10);
			return updateObject(state, { isLoggedIn: false });
		}
		case TEST_ACTION:
			return updateObject(state, { testString: 'Final test' });
		default:
			return state;
	}
};

export default reducer;
