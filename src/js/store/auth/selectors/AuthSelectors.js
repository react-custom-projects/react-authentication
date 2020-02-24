export const AuthFormEmail = ({ state }) => state.auth.email;

export const authFormPassword = ({ state }) => state.auth.password;

export const isAuthFormValid = ({ state }) => {
	const authForm = {
		...state.auth,
	};
	return authForm.email.valid && authForm.password.valid;
};
