import React from 'react';

const ThirdParty = ({ label }) => {
	return (
		<div className="third-party-wrapper">
			<div className="alert alert-primary">Or {label} using third-party services</div>
			<div className="btns-wrapper">
				<button className="std-btn primary">Facebbok</button>
				<button className="std-btn primary">Google</button>
			</div>
		</div>
	);
};

export default ThirdParty;
