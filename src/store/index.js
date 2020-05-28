import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { NativeModules } from 'react-native';
import { reactotron } from '~/config/Reactotron';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];
const port = address.split(':')[1];

console.log(port, hostname);

const reactotronMiddleware = reactotron.createEnhancer();

const sagaMiddleware = createSagaMiddleware();

const enhancer = __DEV__
  ? compose(reactotronMiddleware, applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
