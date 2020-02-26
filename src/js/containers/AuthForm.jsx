import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import {
	resetAuthForm,
	setAuthFormEmailProperties,
	setAuthFormPasswordProperties,
} from '../store/auth/actions/AuthActions';
//selectors
import {
	isAuthFormValid,
	AuthFormEmail,
	authFormPassword,
} from '../store/auth/selectors/AuthSelectors';
//components
import Input from '../components/shared/Input';

class AuthForm extends Component {
	inputsConfigurations = {
		emailConf: {
			label: 'Email',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Enter your email',
				name: 'email',
				id: 'authEmail',
			},
		},
		passwordConf: {
			label: 'Password',
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'Enter your password',
				name: 'password',
				id: 'authPassword',
			},
		},
	};

	componentWillUnmount() {
		const { dispatch } = this.props;
		dispatch(resetAuthForm());
	}

	emailHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setAuthFormEmailProperties(value));
	};

	passwordHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setAuthFormPasswordProperties(value));
	};

	// on form submission
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { onSubmit } = this.props;
		onSubmit();
	};
	render() {
		const { emailConf, passwordConf } = this.inputsConfigurations,
			{ email, password, isFormValid, btnLabel } = this.props;

		return (
			<form className="f" onSubmit={this.onSubmitHandler}>
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
					{email.displayErrors.isRequiredError && <p className="error-message">Required Field.</p>}
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
					>
						{btnLabel}
					</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	email: AuthFormEmail({ state }),
	password: authFormPassword({ state }),
	isFormValid: isAuthFormValid({ state }),
});

export default connect(mapStateToProps)(AuthForm);
