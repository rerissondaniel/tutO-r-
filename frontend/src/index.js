import React from 'react';
import ReactDOM from 'react-dom';
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import MainPage from './components/MainPage';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);