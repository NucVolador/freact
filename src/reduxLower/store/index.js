import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer';
import mySaga from './sagas';

//redux-thunk
// import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// );

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;