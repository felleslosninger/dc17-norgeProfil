import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    username : 'Kari Nordmann',
    activeContactEmail : 'email@email.com',
    activeContactPhone : '12345678',
    activeReservation: true,
    activePostbox: ""
};

// REDUCER
export default function infoReducer(state = initialState, action) {
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
        case actionTypes.SET_RESERVATION:
            return {
                ...state,
                activeReservation: true,
            };
        case actionTypes.REMOVE_RESERVATION:
            return {
                ...state,
                activeReservation: false,
            };
        case actionTypes.SET_POSTBOX:
            return {
                ...state,
                activePostbox: action.postbox,
            };
        default:
            return state;
    }
}