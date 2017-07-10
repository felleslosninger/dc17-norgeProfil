import {getUser, getRecentFromUser, getRecentPublicActivity, getUsedServices, getMostUsedAuthTypes, getUnusedAuthTypes } from './APIFunctions';

// ACTION TYPES
export const FETCHED_CONTACT_INFO = 'FETCHED_CONTACT_INFO';
export const FETCHED_RECENT_ACTIVITY = 'FETCHED_RECENT_ACTIVITY';
export const FETCHED_RECENT_PUBLIC_ACTIVITY = 'FETCHED_RECENT_PUBLIC_ACTIVITY';
export const FETCHED_USED_SERVICES = 'FETCHED_USED_SERVICES';
export const FETCHED_USED_AUTH_TYPES = 'FETCHED_USED_AUTH_TYPES';
export const FETCHED_UNUSED_AUTH_TYPES = 'FETCHED_UNUSED_AUTH_TYPES';
export const SAVE_CONTACT_EMAIL = 'SAVE_CONTACT_EMAIL';
export const SAVE_CONTACT_PHONE = 'SAVE_CONTACT_PHONE';
export const SET_RESERVATION = 'SET_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const SET_POSTBOX = 'SET_POSTBOX';



// ACTION CREATORS
export function fetchedContactInfo(contactInfo) {
    return {
        type: FETCHED_CONTACT_INFO,
        contactInfo
    }
}

export function fetchContactInfo() {
    return (dispatch) => {
        return getUser()
            .then(result => dispatch(fetchedContactInfo(result)))
            .catch(error => console.error(error));
    };
}

export function fetchedRecentActivity(recentActivity) {
    return {
        type: FETCHED_RECENT_ACTIVITY,
        recentActivity
    }
}

export function fetchRecentActivity() {
    return (dispatch) => {
        return getRecentFromUser()
            .then(result => dispatch(fetchedRecentActivity(result)))
            .catch(error => console.error(error));
    };
}

export function fetchedRecentPublicActivity(recentPActivity) {
    return {
        type: FETCHED_RECENT_PUBLIC_ACTIVITY,
        recentPActivity
    }
}

export function fetchRecentPublicActivity() {
    return (dispatch) => {
        return getRecentPublicActivity()
            .then(result => dispatch(fetchedRecentPublicActivity(result)))
            .catch(error => console.error(error));
    };
}

export function fetchedUsedServices(usedServices) {
    return {
        type: FETCHED_USED_SERVICES,
        usedServices
    }
}

export function fetchUsedServices() {
    return (dispatch) => {
        return getUsedServices()
            .then(result => dispatch(fetchedUsedServices(result)))
            .catch(error => console.error(error));
    };
}

export function fetchedUnusedAuthTypes(unusedAuthTypes) {
    return {
        type: FETCHED_UNUSED_AUTH_TYPES,
        unusedAuthTypes
    }
}

export function fetchUnusedAuthTypes() {
    return (dispatch) => {
        return getUnusedAuthTypes()
            .then(result => dispatch(fetchedUnusedAuthTypes(result)))
            .catch(error => console.error(error));
    };
}

export function fetchedMostUsedAuthTypes(usedAuthTypes) {
    return {
        type: FETCHED_USED_AUTH_TYPES,
        usedAuthTypes
    }
}

export function fetchMostUsedAuthTypes() {
    return (dispatch) => {
        return getMostUsedAuthTypes()
            .then(result => dispatch(fetchedMostUsedAuthTypes(result)))
            .catch(error => console.error(error));
    };
}


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



