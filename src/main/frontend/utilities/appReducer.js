import * as actionTypes from './actions';

const initialState ={
    isLoggedIn: false
}

export default function appReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn:true
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn:false
            };
        default:
            return state;
    }
}