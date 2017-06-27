import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
};

// REDUCER
export default function GamificationReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_CONTACT_INFO:
            return {
                ...state,
                contactInfo: action.info,
            };
        default:
            return state;
    }
}