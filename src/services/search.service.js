import axios from "axios";

const API_URL = "http://localhost:8000/";

const addRequest = (token, user) => {
    return axios.post(API_URL + "user/add", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteRequest = (token, user) => {
    return axios.post(API_URL + "user/delete", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const acceptRequest = (token, user) => {
    return axios.post(API_URL + "user/accept", {
        user
    }, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
}

const deleteFriend = (token, user) => {
    return axios.post(API_URL + "user/remove", {
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