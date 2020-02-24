import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { signUpUser } from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';
//constants
import { getLoginPageUrl } from '../../constants/AppUrls';

class SignUpPage extends Component {
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(signUpUser());
	};

	render() {
		return (
			<div className="container">
				<h3 className="text-center">Create new account</h3>
				<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Sign Up" />
				<p className="text-right">
					<Link to={getLoginPageUrl()}>Login</Link>
				</p>
			</div>
		);
	}
}

export default connect()(SignUpPage);
