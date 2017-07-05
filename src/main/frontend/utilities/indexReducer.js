import {combineReducers} from "redux";

import infoReducer from "./infoReducer";

const allReducers = combineReducers({
    info: infoReducer
});

export default allReducers;