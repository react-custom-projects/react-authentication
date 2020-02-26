import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
			<div className="container">
				<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Sign In" />
			</div>
		);
	}
}

export default connect()(LoginPage);
