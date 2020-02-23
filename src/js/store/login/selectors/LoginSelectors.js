export const loginFormEmail = ({ state }) => state.login.email;

export const loginFormPassword = ({ state }) => state.login.password;

export const isLoginFormValid = ({ state }) => {
	const loginForm = {
		...state.login,
	};
	return loginForm.email.valid && loginForm.password.valid;
};
