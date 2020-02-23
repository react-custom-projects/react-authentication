import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
//actions
import {
	resetLoginForm,
	setLoginFormEmailProperties,
	setLoginFormPasswordProperties,
	loginUser,
} from '../store/login/actions/LoginActions';
//selectors
import {
	isLoginFormValid,
	loginFormEmail,
	loginFormPassword,
} from '../store/login/selectors/LoginSelectors';
//components
import Input from '../components/shared/Input';

class LoginForm extends Component {
	inputsConfigurations = {
		emailConf: {
			label: 'Email',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Enter your email',
				name: 'email',
				id: 'loginEmail',
			},
		},
		passwordConf: {
			label: 'Password',
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'Enter your password',
				name: 'password',
				id: 'loginPassword',
			},
		},
	};

	form = createRef();

	componentWillUnmount() {
		const { dispatch } = this.props;
		dispatch(resetLoginForm());
	}

	emailHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setLoginFormEmailProperties(value));
	};

	passwordHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setLoginFormPasswordProperties(value));
	};

	// on form submission
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch, email, password } = this.props;
		dispatch(loginUser({ email: email.value, password: password.value }));
	};
	render() {
		const { emailConf, passwordConf } = this.inputsConfigurations,
			{ email, password, isFormValid } = this.props;

		return (
			<div className="container">
				<form ref={this.form} className="f">
					<div className="row">
						<div className="col-xs-12">
							<Input
								elementType={emailConf.elementType}
								elementConfig={emailConf.elementConfig}
								value={email.value}
								changed={this.emailHandler}
								invalid={!email.valid}
								touched={email.touched}
								label={emailConf.label}
							/>
							{email.displayErrors.isRequiredError && (
								<p className="error-message">Required Field.</p>
							)}
							{email.displayErrors.isEmailError && <p className="error-message">Invalid Email</p>}
						</div>
						<div className="col-xs-12">
							<Input
								elementType={passwordConf.elementType}
								elementConfig={passwordConf.elementConfig}
								value={password.value}
								changed={this.passwordHandler}
								invalid={!password.valid}
								touched={password.touched}
								label={passwordConf.label}
							/>
							{password.displayErrors.isRequiredError && (
								<p className="error-message">Required Field.</p>
							)}
						</div>
						<div className="col-xs-12">
							<button
								type="submit"
								className={`std-btn primary ${!isFormValid ? 'disabled' : ''}`}
								style={{ width: '100%' }}
								disabled={!isFormValid}
								onClick={this.onSubmitHandler}
							>
								login
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	email: loginFormEmail({ state }),
	password: loginFormPassword({ state }),
	isFormValid: isLoginFormValid({ state }),
});

export default connect(mapStateToProps)(LoginForm);
