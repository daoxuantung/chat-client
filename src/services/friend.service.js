import axios from "axios";

const API_URL = "http://localhost:8000/user/";

const addRequest = (token, user) => {
    return axios.post(API_URL + "add", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteRequest = (token, user) => {
    return axios.post(API_URL + "delete", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const acceptRequest = (token, user) => {
    return axios.post(API_URL + "accept", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteFriend = (token, user) => {
    return axios.post(API_URL + "remove", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}


export default {
    addRequest,
    deleteRequest,
    acceptRequest,
    deleteFriend
};