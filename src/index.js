import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';
import './style.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
