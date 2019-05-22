import * as actionTypes from '../constants/actionType';

function increment() {
    return {
        type: actionTypes.INCREMENT,
    }
}

function decrement() {
    return {
        type: actionTypes.DECREMENT,
    }
}

function reset() {
    return {
        type: actionTypes.RESET,
    }
}

export {
    increment,
    decrement,
    reset
}