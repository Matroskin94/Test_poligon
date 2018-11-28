import React from 'react';

import Typography from '@material-ui/core/Typography'
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import headerStyles from './styles/headerStyles.css';

const TableHeader = () => (
	<div className={headerStyles.headerContainer}>
		<Typography variant='h6'>Table header</Typography>
		<Tooltip title='Удалить'>
			<IconButton>
				<Delete />
			</IconButton>
		</Tooltip>
	</div>
);

export default TableHeader;
