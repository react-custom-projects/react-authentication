import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { loginUser } from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';
//constants
import { getSignUpPageUrl } from '../../constants/AppUrls';

class LoginPage extends Component {
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(loginUser());
	};

	render() {
		return (
			<div className="container">
				<h3 className="text-center">Login</h3>
				<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Login" />
				<p className="text-right">
					<Link to={getSignUpPageUrl()}>Create new account</Link>
				</p>
			</div>
		);
	}
}

export default connect()(LoginPage);
