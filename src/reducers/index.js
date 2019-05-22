import { combineReducers } from 'redux';
import track from './track';
import count from './count';

export default combineReducers({ track, count })