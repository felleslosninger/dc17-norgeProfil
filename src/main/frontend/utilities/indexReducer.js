import {combineReducers} from "redux";

import gamificationReducer from "./gamificationReducer";

const allReducers = combineReducers({
    gamification: gamificationReducer
});

export default allReducers;