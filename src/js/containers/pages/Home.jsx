import React, { Component } from 'react';
import { connect } from 'react-redux';
//actions
import { setTestAction } from '../../store/app/actions/AppActions';
//selectors
import { getTestAction } from '../../store/app/selectors/AppSelectors';

class Home extends Component {
	onTestAction = () => {
		const { dispatch } = this.props;
		dispatch(setTestAction());
	};

	render() {
		const { testAction } = this.props;
		return (
			<div className="container" style={{ textAlign: 'center' }}>
				<p>
					Testing the store <strong>{testAction}</strong>
				</p>
				<button className="std-btn primary" onClick={this.onTestAction}>
					Change text
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	testAction: getTestAction({ state }),
});

export default connect(mapStateToProps)(Home);
