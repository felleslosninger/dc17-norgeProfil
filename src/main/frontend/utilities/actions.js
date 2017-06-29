// ACTION TYPES
export const SAVE_CONTACT_EMAIL = 'SAVE_CONTACT_EMAIL';
export const SAVE_CONTACT_PHONE = 'SAVE_CONTACT_PHONE';
export const SAVE_BUTTON_CLICKED = 'SAVE_CONTACT_INFO';

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

export function saveButtonClicked() {
    return {
        type: SAVE_BUTTON_CLICKED
    }
}

