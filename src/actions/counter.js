import * as actionTypes from '../constants/actionType';

function increment(id) {
    return {
        type: actionTypes.INCREMENT,
        id
    }
}

function decrement(id) {
    return {
        type: actionTypes.DECREMENT,
        id
    }
}

function reset() {
    return {
        type: actionTypes.RESET
    }
}

export {
    increment,
    decrement,
    reset
}