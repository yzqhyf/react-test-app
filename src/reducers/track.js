import * as actionTypes from '../constants/actionType';

// function setTracks(state, action) {
//     const { tracks } = action;
//     return [...state, ...tracks];
// }

export default function (state = [], action) {
    switch (action.type) {
        case actionTypes.TRACK_SET:
            return [...state, ...action.tracks];
        case actionTypes.INCREMENT:
            return state.track.map((track, index) => {
                return index === action.id ? { ...track, count: track.count + 1 } : track
            });
        case actionTypes.DECREMENT:
            return state.track.map((track, index) => {
                return index === action.id ? { ...track, count: track.count - 1 } : track
            });
        case actionTypes.RESET:
            return state.track.map((track) => {
                return { ...track, count: 0 }
            });
        default:
            return state;
    }
}
