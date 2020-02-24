import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import { loginUser } from '../../store/login/actions/LoginActions';
//components
import LoginForm from '../LoginForm';

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
				<LoginForm onSubmit={this.onSubmitHandler} />
			</div>
		);
	}
}

export default connect()(LoginPage);
