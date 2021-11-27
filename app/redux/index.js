import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware()
const middleware = []
middleware.push(sagaMiddleware)

const enhancers = [applyMiddleware(...middleware)]
const configureStore = createStore(rootReducer, compose(...enhancers))

sagaMiddleware.run(rootSaga);

export default configureStore;