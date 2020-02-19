export const loginFormUserName = ({ state }) => state.login.username;

export const loginFormPassword = ({ state }) => state.login.password;

export const isLoginFormValid = ({ state }) => {
	const loginForm = {
		...state.login,
	};
	return loginForm.username.valid && loginForm.password.valid;
};
