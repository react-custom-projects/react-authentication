import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import { loginUser } from '../../store/auth/actions/AuthActions';
//components
import AuthForm from '../AuthForm';
import ThirdParty from '../../components/ThirdParty';

class LoginPage extends Component {
	onSubmitHandler = () => {
		const { dispatch } = this.props;
		dispatch(loginUser());
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<AuthForm onSubmit={this.onSubmitHandler} btnLabel="Sign In" />
					</div>
					<div className="col-md-6">
						<ThirdParty label="Sign In" />
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(LoginPage);
