import * as actionTypes from '../constants/actionType';

export default function(state=[], action) {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return state.tracks.map((track, index) => {
                return index === action.id ? {...track, count: track.count+1} : track
            });
        case actionTypes.DECREMENT:
            return state.tracks.map((track, index) => {
                return index === action.id ? {...track, count: track.count-1} : track
            });
        case actionTypes.RESET:
            return state.tracks.map((track) => {
                return {...track, count: 0}
            });
        default:
            return state;
    }
}
