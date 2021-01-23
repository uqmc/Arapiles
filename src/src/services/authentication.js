//Based on: https://github.com/cornflourblue/react-jwt-authentication-example/blob/master/src/_services/authentication.service.js
import axios from 'axios';

//Current user, retrieved from local storage.
let currentUser = null;
try {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
} catch (e) {
}


//Function to make and process login request
async function login(identifier, password) {
    const res = await axios.post(process.env.GATSBY_CMS_HOST + '/auth/local/', {
        identifier: identifier,
        password: password
    }).catch(function (error) {
        //TODO: Handle and return error response
        return false;
    });

    //If repsonse was not successful, return false.
    if (!res) {
        return false;
    }

    //Users data
    const user = res.data;

    //Update local storage with new current user data
    localStorage.setItem('currentUser', JSON.stringify(user));

    //Set current user to new user data
    currentUser = user;

    //Return successful login
    return true;
}

//Function to logout
function logout() {
    //Remove current user data from local storrage
    localStorage.removeItem('currentUser');

    //Unset current user data
    currentUser = null;
}

//Function to chek if user is logged in
function isLoggedIn() {
    return currentUser != null;
}

//Function to register a user
async function register(username, email, password) {
    const res = await axios.post(process.env.GATSBY_CMS_HOST + 'auth/local/register', {
        username: username,
        email: email,
        password: password
    }).catch(function (error) {
        //TOOD: Error proccesing
        return false;
    });

    if (!res) {
        return false;
    }

    return true;
}

//Export services
export const authenticationService = {
    login,
    logout,
    isLoggedIn,
    currentUser
};