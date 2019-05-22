import * as actionTypes from '../constants/actionType';

export function setTrack(tracks) {
    return {
        type: actionTypes.TRACK_SET,
        tracks
    };
}