import axios from "axios";

import { authenticationService } from "../services/authentication.js"

//TODO: Improve response and error handling

async function me() {
    const response = await axios.get(process.env.GATSBY_CMS_HOST + "/users/me", {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return response;
    }).catch(error => {
        return false;
    })

    return response;
}

async function find(id) {
    const repsonse = await axios.get(process.env.GATSBY_CMS_HOST + `/users/${id}`, {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return response;
    }).catch(error => {
        return false;
    });
}

async function update(id, data) {
    const response = await axios.put(process.env.GATSBY_CMS_HOST + `/users/${id}`, data, {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return true;
    }).catch(error => {
        return false;
    })

    return response;
}

async function updateMe(data) {
    const response = await axios.put(process.env.GATSBY_CMS_HOST + "grampians/users/me", data, {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return true;
    }).catch(error => {
        return false;
    })
}

export const userService = {
    me,
    find,
    update,
    updateMe
};