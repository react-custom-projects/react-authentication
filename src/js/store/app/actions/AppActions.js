//action types
import { SET_IS_LOGGED_IN_FALSE, SET_IS_LOGGED_IN_TRUE, TEST_ACTION } from '../../actionTypes';

export const setTestAction = () => ({
	type: TEST_ACTION,
});

export const setIsLoggedInTrue = () => ({ type: SET_IS_LOGGED_IN_TRUE });

export const setIsLoggedInFalse = () => ({ type: SET_IS_LOGGED_IN_FALSE });
