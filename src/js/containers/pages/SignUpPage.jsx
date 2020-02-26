import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { signUpUser } from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';

class SignUpPage extends Component {
	onSubmitHandler = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(signUpUser());
	};

	render() {
		return (
			<div className="container">
				<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Sign Up" />
			</div>
		);
	}
}

export default connect()(SignUpPage);
