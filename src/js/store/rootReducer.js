import { combineReducers } from 'redux';
import app from './app/reducers/AppReducer';
import login from './login/reducers/LoginReducer';

const rootReducer = combineReducers({
	app,
	login,
});

export default rootReducer;
