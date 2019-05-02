import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer'

//  Step 1 - Add these imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {sayHello} from './reducers/reducer'

// Step 2 - Create the store
const store = createStore(sayHello);

// Step 3 - Wrap existing app in Provider
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
