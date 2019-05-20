import * as actionTypes from '../constants/actionType';

// function setTracks(state, action) {
//     const { tracks } = action;
//     return [...state, ...tracks];
// }

export default function(state=[], action) {
    switch(action.type) {
        case actionTypes.TRACK_SET:
            return [...state, ...action.tracks];
        default:
            return state;
    }
}