import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    contactEmail : '',
    contactPhone : ''
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
        case actionTypes.SAVE_BUTTON_CLICKED:
            return {
                ...state,
                activeContactEmail: '',
                activeContactPhone: '',
            };
        default:
            return state;
    }
}