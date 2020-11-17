import axios from "axios";

const API_URL = "http://localhost:8000/user/";

const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(API_URL + "login", {
        email,
        password,
    })
};

const getUser = (token) => {
    return axios.post(API_URL, {

    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
};

export default {
    register,
    login,
    getUser
};