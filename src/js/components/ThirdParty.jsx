import React from 'react';
import { connect } from 'react-redux';
//components
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
//actions
import { signUpFacebookUser, signUpGoogleUser } from '../store/auth/actions/AuthActions';
//configuration
import { APP_CONFIG } from '../services/Config';

const ThirdParty = ({ title, facebookBtnLabel, googleBtnLabel, dispatch }) => {
	const responseFacebook = (res) => {
		dispatch(signUpFacebookUser(res.accessToken));
	};

	const responseGoogle = (res) => {
		console.log(res);
		dispatch(signUpGoogleUser(res.accessToken));
	};

	return (
		<div className="third-party-wrapper">
			<div className="alert alert-primary">Or {title} using third-party services</div>
			<div className="btns-wrapper">
				<FacebookLogin
					appId={APP_CONFIG.OAUTH_APP_ID.facebook.appId}
					textButton={facebookBtnLabel}
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass="std-btn primary"
				/>
				<GoogleLogin
					clientId={APP_CONFIG.OAUTH_APP_ID.google.appId}
					buttonText={googleBtnLabel}
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					className="std-btn danger"
				/>
			</div>
		</div>
	);
};

export default connect()(ThirdParty);
