import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'reducers/index';
import { rootSaga } from 'src/sagas';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);

    return store;
};
