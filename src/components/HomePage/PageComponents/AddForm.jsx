import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/ShoppingCart';

import { noop } from '../../../utils/common';

import formStyles from './styles/formStyles.css';

const inputStyle = { margin: 8 };

const AddForm = ({ formData, handleInputChange, handleAddClick }) => (
	<div>
		<Typography variant='h6'>Добавить расход</Typography>
		<div className={formStyles.formContainer}>
			<div className={formStyles.formBlock}>
				<TextField
					label="Наименование расходда"
					placeholder="Введите наименование"
					style={inputStyle}
					margin="normal"
					value={formData.name}
					onChange={handleInputChange('name')}
		        />
		        <TextField
					id="standard-number"
					label="Стоимость"
					style={inputStyle}
					value={formData.cost}
					onChange={handleInputChange('cost')}
					type="number"
					margin="normal"
		        />
			</div>
			<div className={formStyles.formBlock}>
		        <TextField
					select
					label="Тип расхода"
					value={formData.type}
					onChange={handleInputChange('type')}
					style={{ margin: 8, width: '164px' }}
				>
					<MenuItem key='Продукты' value='Продукты'>
						Продукты
					</MenuItem>
					<MenuItem key='Транспортные расходы' value='Транспортные расходы'>
						Транспортные расходы
					</MenuItem>
					<MenuItem key='Одежда' value='Одежда'>
						Одежда
					</MenuItem>
					<MenuItem key='Прочее' value='Прочее'>
						Прочее
					</MenuItem>
				</TextField>
				<TextField
					id="date"
					label="Дата покупки"
					type="date"
					style={inputStyle}
					defaultValue={formData.date}
					onChange={handleInputChange('date')}
					InputLabelProps={{
						shrink: true,
					}}
				/>
	        </div>
	        <RadioGroup
	        	className={formStyles.formBlock}
	        	row
	        	value={formData.currency}
	        	aria-label="Валюта"
	        	onChange={handleInputChange('currency')}

	        >
	            <FormControlLabel value="RU" control={<Radio />} label="Российский рубль" />
	            <FormControlLabel value="BY" control={<Radio />} label="Белорусский рубль" />
	        </RadioGroup>
		</div>
		<Button
			variant='contained'
			size='small'
			onClick={handleAddClick}
		>
	        Добавить
	        <SaveIcon className={formStyles.iconStyle} />
	    </Button>
	</div>
);

AddForm.propTypes = {
	handleInputChange: PropTypes.func,
	handleAddClick: PropTypes.func,
	formData: PropTypes.object
}

AddForm.defaultProps = {
	handleInputChange: noop,
	handleAddClick: noop,
	formData: {
		name: '',
		cost: '',
		type: 'Продукты',
		date: '',
		currency: 'RU'
	}
}

export default AddForm;
