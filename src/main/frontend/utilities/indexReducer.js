import {combineReducers} from "redux";

import infoReducer from "./infoReducer";
import appReducer from "./appReducer";

const allReducers = combineReducers({
    info: infoReducer,
    app: appReducer
});

export default allReducers;