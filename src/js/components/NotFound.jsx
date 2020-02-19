import React from 'react';

const NotFound = () => {
	return (
		<div className="not-found container">
			<div className="row">
				<div className="col-md-3 col-sm-4">
					<i className="fas fa-times" />
				</div>
				<div className="col-md-9 col-sm-8 text-center">
					<h1 className="center-block">
						<span className="not-found-code">404</span> <span className="error">error</span>
					</h1>
					<h3>Page not found!</h3>
					<p>
						We are sorry but the page you are looking for doesn't exist or has been moved.
						<br />
						Please check back later or use our navigation menu
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
