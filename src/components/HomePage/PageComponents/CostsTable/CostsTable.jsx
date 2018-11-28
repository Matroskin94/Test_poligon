import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';

import EnhancedTableHead from './EnhancedTableHead.jsx';

import tableStyles from './tableStyles.css';

class CostsTable extends Component {
	static propTypes = {
		costs: PropTypes.array
	};

	static defaultProps = {
		costs: []
	};

	state = {
		order: 'asc',
		orderBy: 'date',
		selected: [],
		page: 0,
    	rowsPerPage: 3,
	}

	desc = (a, b, orderBy) => {
	  if (b[orderBy] < a[orderBy]) {
	    return -1;
	  }
	  if (b[orderBy] > a[orderBy]) {
	    return 1;
	  }
	  return 0;
	}

	handleClick = (event, id) => {
	    const { selected } = this.state;
	    const selectedIndex = selected.indexOf(id);
	    let newSelected = [];

	    if (selectedIndex === -1) {
	      newSelected = newSelected.concat(selected, id);
	    } else if (selectedIndex === 0) {
	      newSelected = newSelected.concat(selected.slice(1));
	    } else if (selectedIndex === selected.length - 1) {
	      newSelected = newSelected.concat(selected.slice(0, -1));
	    } else if (selectedIndex > 0) {
	      newSelected = newSelected.concat(
	        selected.slice(0, selectedIndex),
	        selected.slice(selectedIndex + 1),
	      );
	    }

	    this.setState({ selected: newSelected });
	}

	handleChangePage = (event, page) => {
		this.setState({ page });
	}

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	}

	handleSelectAllClick = event => {
		const { costs } = this.props;

	    if (event.target.checked) {
	      this.setState(state => ({ selected: costs.map(row => row.id) }));

	      return;
	    }

	    this.setState({ selected: [] });
	  };

	stableSort = (array, cmp) => {
	  const stabilizedThis = array.map((el, index) => [el, index]);

	  stabilizedThis.sort((a, b) => {
	    const order = cmp(a[0], b[0]);
	    if (order !== 0) return order;
	    return a[1] - b[1];
	  });
	  return stabilizedThis.map(el => el[0]);
	}

	getSorting = (order, orderBy) => {
	  return order === 'desc' ?
	  	(a, b) => this.desc(a, b, orderBy) :
	  	(a, b) => -this.desc(a, b, orderBy);
	}

	isSelected = id => this.state.selected.indexOf(id) !== -1

	renderRows = () => {
		const { costs } = this.props;
		const {
			order,
			orderBy,
			page,
			rowsPerPage
		} = this.state;

		return this.stableSort(costs, this.getSorting(order, orderBy))
			.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => {
              const isSelected = this.isSelected(row.id);

              return (
                <TableRow
                  hover
                  onClick={event => this.handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.cost}</TableCell>
                  <TableCell>{row.currency}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              );
            });
	}


	render() {
		const { costs } = this.props;
		const { page, rowsPerPage, selected } = this.state;

		return (
			<div className={tableStyles.tableDataWrapper}>
				<div className={tableStyles.tableContainer}>
					<Table>
						<EnhancedTableHead 
							numSelected={selected.length}
							rowCount={costs.length}
							onSelectAllClick={this.handleSelectAllClick}
						/>
						<TableBody>
							{this.renderRows()}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5]}
					component="div"
					count={costs.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'Previous Page',
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page',
					}}
					onChangePage={this.handleChangePage}
		        />
			</div>
		);
	}

}

export default CostsTable;
