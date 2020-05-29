import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { Toast } from 'react-native-redux-toast';
import App from './App';
import store from './store';
import './config/Reactotron';

if (__DEV__) {
  require('react-devtools');
}

export default function Root() {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <App />
        <Toast messageStyle={{ padding: 10 }} />
      </Fragment>
    </Provider>
  );
}
