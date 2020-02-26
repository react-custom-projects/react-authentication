import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
//toast
import { toast } from 'react-toastify';
//actions
import { setIsLoggedInFalse } from '../store/app/actions/AppActions';
//selectors
import { isLoggedIn } from '../store/app/selectors/AppSelectors';
//constants
import { getDashboardUrl, getSignInPageUrl, getSignUpPageUrl } from '../constants/AppUrls';

class Header extends Component {
	logoutHandler = () => {
		const {
			dispatch,
			history: { push },
		} = this.props;
		dispatch(setIsLoggedInFalse());
		toast.success('Logged out successfully');
		push(getSignInPageUrl());
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
						{isLoggedIn && (
							<NavLink to={getDashboardUrl()} className="navbar-brand">
								Dashboard
							</NavLink>
						)}
					</div>
					<ul className="nav navbar-nav">
						{!isLoggedIn ? (
							<Fragment>
								<NavLink to={getSignInPageUrl()} className="navbar-brand">
									Sign In
								</NavLink>
								<NavLink to={getSignUpPageUrl()} className="navbar-brand">
									Sign Up
								</NavLink>
							</Fragment>
						) : (
							<li onClick={this.logoutHandler}>
								<a>Sign Out</a>
							</li>
						)}
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
