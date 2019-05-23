import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './App';
import './index.css';

const tracks = [
  {
      id: '1',
      title: 'Track A',
      like: 0,
      dislike: 0
  },
  {
      id: '2',
      title: 'Track B',
      like: 0,
      dislike: 0
  }
];

const store = configureStore();
store.dispatch(actions.setTrack(tracks));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
