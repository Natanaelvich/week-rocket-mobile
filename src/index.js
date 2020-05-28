import React from 'react';

import { Provider } from 'react-redux';
import App from './App';
import store from './store';

if (__DEV__) {
  require('react-devtools');
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
