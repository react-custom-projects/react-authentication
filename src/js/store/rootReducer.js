import { combineReducers } from 'redux';
import app from './app/reducers/AppReducer';
import auth from './auth/reducers/AuthReducer';

const rootReducer = combineReducers({
	app,
	auth,
});

export default rootReducer;
