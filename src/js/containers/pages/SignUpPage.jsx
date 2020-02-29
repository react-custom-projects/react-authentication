import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import {
	signUpUser,
	signUpFacebookUser,
	signUpGoogleUser,
} from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';
import ThirdParty from '../../components/ThirdParty';

class SignUpPage extends Component {
	onSubmitHandler = () => {
		const { dispatch } = this.props;
		dispatch(signUpUser());
	};

	responseFacebook = (res) => {
		const { dispatch } = this.props;
		dispatch(signUpFacebookUser(res.accessToken));
	};

	responseGoogle = (res) => {
		const { dispatch } = this.props;
		dispatch(signUpGoogleUser(res.accessToken));
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Sign Up" />
					</div>
					<div className="col-md-6">
						<ThirdParty
							label="Sign Up"
							responseFacebook={this.responseFacebook}
							responseGoogle={this.responseGoogle}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(SignUpPage);
