import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    username : 'Kari Nordmann',
    activeContactEmail : '',
    activeContactPhone : '',
    activeReservation: '',
    activePostbox: "",
    activeEid: ['MinID', 'BankID'],
    nonActiveEid: ['BankID på Mobil', 'Buypass ID', 'Commfides'],
    recentUserActivity: [],
    recentPublicActivity: [{publicSector: 'Skatteetaten', info: 'Mobilnummer', time: '10 Desember 2016 20:10'}, {publicSector: 'Collouseum Tannlege', info: 'Mobilnummer', time: '09 Januar 2017 09:10'}],
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
                recentUserActivity: [{eID: action.recentActivity.data.type, service: action.recentActivity.data.issuer, time: action.recentActivity.data.dateTime}]
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