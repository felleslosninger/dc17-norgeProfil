import axios from "axios";

export function getUser() {
    return fetchFromServer("/getKrrInfo");
}

export function getRecentFromUser() {
    return fetchFromServer("/getRecentUserActivity");
}

export function getRecentPublicActivity() {
    return fetchFromServer("/getRecentPublicActivity");
}
export function getUnusedAuthTypes() {
    return fetchFromServer("/getUnusedAuthTypes");
}
export function getMostUsedAuthTypes() {
    return fetchFromServer("/getMostUsedAuthTypes");
}

export function getUsedServices() {
    return fetchFromServer("/getUsedServices");
}

export function getPostbox() {
    return fetchFromServer("/getPostBoks");
}

function fetchFromServer(query) {
    return axios.get(query, {
        credentials: "same-origin"
    }).then(response => {
        if (response.status >= 400) {
            throw new Error("GET-request: Bad response from server");
        }
        return response
    }).then(function (result) {
        if (result.error) {
            console.log("The GET-request threw an error:\n" + query);
            return Promise.reject(result.error);
        } else {
            return result;
        }
    });
}