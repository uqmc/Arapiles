import axios from "axios";

import { authenticationService } from "../services/authentication.js"

import { add, parse, isFuture } from "date-fns";

async function memberships() {
    const response = await axios.get(process.env.GATSBY_CMS_HOST + "/grampians/memberships", {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return response;
    }).catch(error => {
        return false;
    })

    return response;
}

async function pay(membershipID, token) {
    const response = await axios.put(process.env.GATSBY_CMS_HOST + "/grampians/memberships/pay", {
        membershipID: membershipID,
        token: token
    }, {
        headers: authenticationService.getAuthHeader()
    }).then(response => {
        return true;
    }).catch(error => {
        return error.response.data.message;
    })

    return response; 
}

function isValid(user) {
    const currentMembershipStartDate = parse(user.currentMembershipStartDate, 'yyyy-MM-dd', new Date());
    const currentMembershipEndDate = add(currentMembershipStartDate, { days: user.currentMembershipLength });
    return isFuture(currentMembershipEndDate);
}

export const membershipService = {
    memberships,
    pay,
    isValid
};