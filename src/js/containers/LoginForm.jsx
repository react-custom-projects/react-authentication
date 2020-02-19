import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
//actions
import {
	resetLoginForm,
	setLoginFormUserNameProperties,
	setLoginFormPasswordProperties,
	loginUser,
} from '../store/login/actions/LoginActions';
//selectors
import {
	isLoginFormValid,
	loginFormUserName,
	loginFormPassword,
} from '../store/login/selectors/LoginSelectors';
//components
import Input from '../components/shared/Input';

class LoginForm extends Component {
	inputsConfigurations = {
		userNameConf: {
			label: 'Username',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Enter your username',
				name: 'username',
				id: 'loginUserName',
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

	userNameHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setLoginFormUserNameProperties(value));
	};

	passwordHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setLoginFormPasswordProperties(value));
	};

	// on form submission
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch, username, password } = this.props;
		dispatch(loginUser({ username: username.value, password: password.value }));
	};
	render() {
		const { userNameConf, passwordConf } = this.inputsConfigurations,
			{ username, password, isFormValid } = this.props;

		return (
			<div className="container">
				<form ref={this.form} className="f">
					<div className="row">
						<div className="col-xs-12">
							<Input
								elementType={userNameConf.elementType}
								elementConfig={userNameConf.elementConfig}
								value={username.value}
								changed={this.userNameHandler}
								invalid={!username.valid}
								touched={username.touched}
								label={userNameConf.label}
							/>
							{username.displayErrors.isRequiredError && (
								<p className="error-message">Required Field.</p>
							)}
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
	username: loginFormUserName({ state }),
	password: loginFormPassword({ state }),
	isFormValid: isLoginFormValid({ state }),
});

export default connect(mapStateToProps)(LoginForm);
