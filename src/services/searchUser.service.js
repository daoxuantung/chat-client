import axios from "axios";

const API_URL = "http://localhost:8000/search";

const searchUser = (user, currentUserId) => {
    return axios.get(API_URL, {
        params: {
            user, currentUserId
        },
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export default {
    searchUser
};