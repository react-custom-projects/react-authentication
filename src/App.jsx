import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
//toast
import { ToastContainer } from 'react-toastify';
//selectors
import { isLoggedIn } from './js/store/app/selectors/AppSelectors';
//constants
import { getDashboardUrl, getSignInPageUrl, getSignUpPageUrl } from './js/constants/AppUrls';
import { history } from './js/constants/helper';
//components
const AsyncHeader = lazy(() => import('./js/containers/Header'));
//pages
import LoginPage from './js/containers/pages/LoginPage';
import NotFound from './js/components/NotFound';
import Home from './js/containers/pages/Home';
import SignupPage from './js/containers/pages/SignUpPage';
import LoadingIcon from './js/components/LoadingIcon';

class App extends Component {
	render() {
		const { isLoggedIn } = this.props;

		return (
			<Fragment>
				<Suspense fallback={<LoadingIcon />}>
					<AsyncHeader />
					{isLoggedIn ? (
						<Fragment>
							<Switch>
								<Route
									exact
									path="/"
									render={() => {
										return <Redirect to={getDashboardUrl()} />;
									}}
								/>
								<Route path={getDashboardUrl()} component={Home} />
								<Route component={NotFound} />
							</Switch>
						</Fragment>
					) : (
						<Switch>
							{/* Redirect to login page when we hit base url if the user is not logged in */}
							<Route
								exact
								path="/"
								render={() => {
									return (
										<Redirect
											to={{
												pathname: getSignInPageUrl(),
												state: { referrer: history.location.pathname },
											}}
										/>
									);
								}}
							/>
							<Route path={getSignInPageUrl()} component={LoginPage} />
							<Route path={getSignUpPageUrl()} component={SignupPage} />
							<Route component={NotFound} />
						</Switch>
					)}
					<ToastContainer />
				</Suspense>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: isLoggedIn({ state }),
});

export default connect(mapStateToProps)(hot(App));
