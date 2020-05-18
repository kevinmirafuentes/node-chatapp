import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './css/index.css';
import App from './components/App';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import axios from 'axios'

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(axios))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
