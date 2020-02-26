import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
//configuration
import { APP_CONFIG } from '../services/Config';

const ThirdParty = ({ label, responseFacebook, responseGoogle }) => {
	return (
		<div className="third-party-wrapper">
			<div className="alert alert-primary">Or {label} using third-party services</div>
			<div className="btns-wrapper">
				<FacebookLogin
					appId={APP_CONFIG.OAUTH_APP_ID.facebook.appId}
					autoLoad={true}
					textButton="Facebbok"
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass="std-btn primary"
				/>
				<GoogleLogin
					clientId={APP_CONFIG.OAUTH_APP_ID.google.appId}
					buttonText="Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					className="std-btn danger"
				/>
			</div>
		</div>
	);
};

export default ThirdParty;