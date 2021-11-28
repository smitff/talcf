import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './reducers';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(sagaMiddleware);
middleware.push(logger);

const enhancers = [applyMiddleware(...middleware)];
const configureStore = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default configureStore;
