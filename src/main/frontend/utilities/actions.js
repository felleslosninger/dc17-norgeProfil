// ACTION TYPES
export const SAVE_CONTACT_EMAIL = 'SAVE_CONTACT_EMAIL';
export const SAVE_CONTACT_PHONE = 'SAVE_CONTACT_PHONE';
export const SET_RESERVATION = 'SET_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const SET_POSTBOX = 'SET_POSTBOX';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function login() {
    return{
        type:LOGIN
    }
}

//ACTIONS LOGIN
export function logout() {
    return{
        type: LOGOUT
    }
}

// ACTION CREATORS
export function saveContactEmail(contactEmail) {
    return {
        type: SAVE_CONTACT_EMAIL,
        contactEmail
    }
}

export function saveContactPhone(contactPhone) {
    return {
        type: SAVE_CONTACT_PHONE,
        contactPhone
    }
}

export function setReservation() {
    return {
        type: SET_RESERVATION
    }
}

export function removeReservation() {
    return {
        type: REMOVE_RESERVATION,
    }
}

export function setPostbox(postbox) {
    return {
        type: SET_POSTBOX,
        postbox
    }
}



