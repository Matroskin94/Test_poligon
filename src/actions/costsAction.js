import { ADD_ITEM, DELETE_ITEM } from '../constants/actionTypes';

export function addCost(item) {
	return {
		type: ADD_ITEM,
		payload: item
	};
}

export function deleteCost() {
	return {
		type: DELETE_ITEM
	};
}
