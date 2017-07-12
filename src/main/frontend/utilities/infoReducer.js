import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    username: 'Kari Nordmann',
    activeContactEmail: '',
    activeContactPhone: '',
    activeReservation: '',
    activePostbox: '',
    activeEid: [],
    nonActiveEid: [],
    recentUserActivity: [],
    recentPublicActivity: [],
};

// REDUCER
export default function infoReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHED_CONTACT_INFO:
            return {
                ...state,
                activeContactEmail: action.contactInfo.data.kontaktinformasjon.epostadresse,
                activeContactPhone: action.contactInfo.data.kontaktinformasjon.mobiltelefonnummer,
                activeReservation: action.contactInfo.data.reservasjon,

            };
        case actionTypes.FETCHED_RECENT_ACTIVITY:
            return {
                ...state,
                recentUserActivity: action.recentActivity.data
            };
        case actionTypes.FETCHED_RECENT_PUBLIC_ACTIVITY:
            return {
                ...state,
                recentPublicActivity: action.recentPActivity.data
            };
        case actionTypes.FETCHED_UNUSED_AUTH_TYPES:
            return {
                ...state,
                nonActiveEid: action.unusedAuthTypes.data
            };
        case actionTypes.FETCHED_USED_AUTH_TYPES:
            return {
                ...state,
                activeEid: action.usedAuthTypes.data
            };
        case actionTypes.FETCHED_POSTBOX:
            return {
                ...state,
                activePostbox: action.postbox.data
            };
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
                activeReservation: 'JA',
            };
        case actionTypes.REMOVE_RESERVATION:
            return {
                ...state,
                activeReservation: 'NEI',
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