import React, { Component } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';


const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Наименование' },
  { id: 'cost', numeric: true, disablePadding: false, label: 'Стоимость' },
  { id: 'currency', numeric: false, disablePadding: false, label: 'Валюта' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Тип покупки' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Дата покупки' },
];

class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
  	console.log('PROPERTY', property);
  	console.log('EVENT', event);
    // this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
