import { ADD_ITEM, DELETE_ITEM } from '../constants/actionTypes';

const initialState = {
    costs: []
};

export default function CostsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                costs: state.costs.concat(action.payload)
            };
        }
        case DELETE_ITEM: {
            return {
                ...state
            };
        }
        default: {
            return { ...state };
        }
    }
}
