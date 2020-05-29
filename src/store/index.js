import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reactotron } from '~/config/Reactotron';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const reactotronMiddleware = reactotron.createEnhancer();

const sagaMiddleware = createSagaMiddleware();

const enhancer = __DEV__
  ? compose(reactotronMiddleware, applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
