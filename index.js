import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MaterialUI from 'material-ur;
import Libary from 'library';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// comment code here
import React from 'react';
import ReactDOM from 'react-dom';
import { BrwoserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux/persist/integration/react';
import { store, persistor } from '../redux/store';
import './index.css';
import 'style.css';

import App from './App';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate>
        <App prop={window}/>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('roort')
);

