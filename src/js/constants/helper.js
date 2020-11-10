//toast
import { toast } from 'react-toastify';
//constants
import { createBrowserHistory } from 'history';
import { getSignInPageUrl } from './AppUrls';

export const history = createBrowserHistory();

// return the given object without the provided key
export const objectWithoutKey = (object, key) => {
	const { [key]: deletedKey, ...otherKeys } = object;
	return otherKeys;
};

//decode token
export const getUserFromJwtToken = (token) => {
	try {
		const jwtPayload = JSON.parse(atob(token.split('.')[1])),
			//revise this line
			user = { ...jwtPayload.user, per: jwtPayload.per };
		console.log(jwtPayload);
		return user;
	} catch (err) {
		history.push(getSignInPageUrl());
		toast.error('Something went wrong');
		return {};
	}
};
