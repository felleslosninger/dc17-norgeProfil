import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../utilities/indexReducer";

export default function configureStore() {

    let middleware = [
        thunk,
    ];

    let store = createStore(rootReducer);

    return store;
};