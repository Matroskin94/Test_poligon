import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import globalStyles from './global.css';

class MainLayout extends Component {
	static propTypes = {
        children: PropTypes.node.isRequired
    };

	render() {
		const { children } = this.props;

		return (
			<Grid className={globalStyles.containerLayout} container spacing={24}>
				<Grid item xs={12}>
					{children}
				</Grid>
			</Grid>
		);
	}
}

export default MainLayout;
