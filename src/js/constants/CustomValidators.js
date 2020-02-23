// used to check if the given field is required
export const validateRequired = (inputValue) => {
	return inputValue.trim() === '';
};

//check if valid email
export const validateEmail = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9\-]+\.)+)([a-zA-Z]{2,4})$/.test(inputValue.trim())
	) {
		isError = true;
	}
	return isError;
};
