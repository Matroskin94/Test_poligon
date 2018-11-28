import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import TableDescription from './PageComponents/TableDescription.jsx';
import CostsTable from './PageComponents/CostsTable/CostsTable.jsx';
import AddForm from './PageComponents/AddForm.jsx';

import contentStyles from './contentStyles.css';

let id = (new Date()).getTime();

function createData(name, cost, currency, date, type) {
	id += 1;

	return { id, name, cost, currency, date, type };
}

const mockData = [
	createData('Продукты питания', 250, 'Российский рубль', '2018-11-25', 'Продукты'),
	createData('Одежда', 50, 'Белорусский рубль', '2018-11-25', 'Одежда'),
	createData('Проезд на метро', 90, 'Российский рубль', '2018-11-25', 'Транспорт'),
	createData('Проезд на траллейбусе', 40, 'Российский рубль', '2018-11-25', 'Транспорт')
];

class Content extends Component {
	state = {
		formData: {
			name: '',
			cost: '',
			type: 'Прочее',
			date: '',
			currency: 'BY'
		}
	}

	handleInputChange = name => event => {
		const imputValue = event.target.value;

		this.setState(state => ({
			formData: {
				...state.formData,
				[name]: imputValue
			}
		}));
	}

	handleAddClick = () => {
		console.log('RHIS>STATE', this.state);
	}

	render() {
		const { formData } = this.state;

		return (
		    <div className={contentStyles.pageLayout}>
		        <Typography variant='h4'>Таблица расходов</Typography>
		        <Paper className={contentStyles.tableLayout}>
			        <TableDescription />
			        <CostsTable costs={mockData} />
		        </Paper>
		        <AddForm
		        	handleInputChange={this.handleInputChange}
		        	handleAddClick={this.handleAddClick}
		        	formData={formData}
		        />
		    </div>
		);
	}
}

export default Content;
