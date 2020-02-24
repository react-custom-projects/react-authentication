import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import { loginUser } from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';

class LoginPage extends Component {
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(loginUser());
	};

	render() {
		return (
			<div>
				<h3 className="text-center">Login</h3>
				<AuthForm onSubmit={this.onSubmitHandler} />
			</div>
		);
	}
}

export default connect()(LoginPage);
