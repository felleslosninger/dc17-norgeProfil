import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    activeContactEmail : 'email@email.com',
    activeContactPhone : '12345678'
};

// REDUCER
export default function GamificationReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_CONTACT_PHONE:
            return {
                ...state,
                activeContactPhone: action.contactPhone,
            };
        case actionTypes.SAVE_CONTACT_EMAIL:
            return {
                ...state,
                activeContactEmail: action.contactEmail,
            };
        default:
            return state;
    }
}