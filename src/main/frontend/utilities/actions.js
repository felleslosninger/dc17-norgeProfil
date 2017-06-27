// ACTION TYPES
export const ADD_CONTACT_INFO = 'ADD_CONTACT_INFO';

// ACTION CREATORS
export function addContactInfo(contactInfo) {
    return {
        type: ADD_CONTACT_INFO,
        contactInfo
    }
}

