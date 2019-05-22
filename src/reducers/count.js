import * as actionTypes from '../constants/actionType';

export default function(state={count: 0}, action) {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return { ...state, count: state.count++ };
        case actionTypes.DECREMENT:
            return { ...state, count: state.count-- };
        case actionTypes.RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}
