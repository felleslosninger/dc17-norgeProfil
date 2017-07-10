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
    recentUserActivity: [{eId: 'MinID', service: 'Danske Bank', time: '18 Juli 2017 22:13'}, {eId: 'BankID', service: 'Altinn', time: '30 Juli 2017 12:09'}],
    recentPublicActivity: [{publicSector: 'Skatteetaten', info: 'Mobilnummer', time: '10 Desember 2016 20:10'}, {publicSector: 'Collouseum Tannlege', info: 'Mobilnummer', time: '09 Januar 2017 09:10'}],
};

// REDUCER
export default function infoReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHED_CONTACT_INFO:
            console.log(action.contactInfo);
            return {
                ...state,
                activeContactEmail: action.contactInfo.data.kontaktinformasjon.epostadresse,
                activeContactPhone: action.contactInfo.data.kontaktinformasjon.mobiltelefonnummer,
                activeReservation: action.contactInfo.data.reservasjon,

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