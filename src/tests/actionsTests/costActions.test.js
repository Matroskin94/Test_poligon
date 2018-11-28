import { ADD_ITEM, DELETE_ITEM } from '../../constants/actionTypes';
import { addCost, deleteCost } from '../../actions/costsAction';

import { addItemPayload } from './mockForActions.js';

describe('Add item to table action', () => {
	it('Test action type', () => {
		expect(addCost().type).toBe(ADD_ITEM);
	});
	it('Test action payload', () => {
		expect(addCost(addItemPayload).payload).toEqual(addItemPayload);
	})
});

describe('Delete ietem from table action', () => {
	it('Check of action type', () => {
		expect(deleteCost().type).toBe(DELETE_ITEM);
	});
});
