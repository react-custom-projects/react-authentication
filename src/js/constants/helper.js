import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// return the given object without the provided key
export const objectWithoutKey = (object, key) => {
	const { [key]: deletedKey, ...otherKeys } = object;
	return otherKeys;
};
