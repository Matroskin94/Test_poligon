import CostsReducer from '../../store/CostsReducer';
import { addCost, deleteCost } from '../../actions/costsAction';

import { newItemMock } from './mockForReducers';

describe('CostReducer add item', () => {
	it('New item added', () => {
		expect(CostsReducer({ costs: [] }, addCost(newItemMock)).costs.length).not.toBe(0);
	});

	it('Item added', () => {
		expect(CostsReducer({ costs: [] }, addCost(newItemMock)).costs).toContain(newItemMock);
	});
});
