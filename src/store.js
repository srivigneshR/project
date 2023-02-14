import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import config from './config'


const middleware = [thunk];
const initState = {};

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;