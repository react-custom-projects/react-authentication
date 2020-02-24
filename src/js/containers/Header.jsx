import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
//toast
import { toast } from 'react-toastify';
//actions
import { setIsLoggedInFalse } from '../store/app/actions/AppActions';
//constants
import { getHomeUrl, getLoginPageUrl } from '../constants/AppUrls';
//selectors
import { isLoggedIn } from '../store/app/selectors/AppSelectors';

class Header extends Component {
	logoutHandler = () => {
		const {
			dispatch,
			history: { push },
		} = this.props;
		dispatch(setIsLoggedInFalse());
		toast.success('Logged out successfully');
		push(getLoginPageUrl());
	};

	render() {
		const { isLoggedIn } = this.props;
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							ReactAuth
						</Link>
					</div>
					<ul className="nav navbar-nav">
						<li onClick={this.logoutHandler}>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: isLoggedIn({ state }),
});

export default connect(mapStateToProps)(withRouter(Header));
