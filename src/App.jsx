import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
//toast
import { ToastContainer } from 'react-toastify';
//selectors
import { isLoggedIn } from './js/store/app/selectors/AppSelectors';
//constants
import { getHomeUrl, getLoginPageUrl } from './js/constants/AppUrls';
import { history } from './js/constants/helper';
//components
import Header from './js/containers/Header';
//pages
import LoginPage from './js/containers/pages/LoginPage';
import NotFound from './js/components/NotFound';
import Home from './js/containers/pages/Home';

class App extends Component {
	render() {
		const { isLoggedIn } = this.props;

		return (
			<Fragment>
				<Header />
				{isLoggedIn ? (
					<Fragment>
						<Switch>
							<Route
								exact
								path="/"
								render={() => {
									return <Redirect to={getHomeUrl()} />;
								}}
							/>
							<Route path={getHomeUrl()} component={Home} />
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
											pathname: getLoginPageUrl(),
											state: { referrer: history.location.pathname },
										}}
									/>
								);
							}}
						/>
						<Route path={getLoginPageUrl()} component={LoginPage} />
						<Route component={NotFound} />
					</Switch>
				)}
				<ToastContainer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: isLoggedIn({ state }),
});

export default connect(mapStateToProps)(hot(App));
