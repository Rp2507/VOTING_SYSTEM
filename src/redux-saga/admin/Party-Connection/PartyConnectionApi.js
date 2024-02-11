import axios from "axios"
import { BASE_URL, DELETE_PARTY_CONNECTION_URL, GET_PARTY_CONNECTION_URL, POST_PARTY_CONNECTION_URL } from "../../constant"

export function get_party_connection_api() {
    return axios
        .get(BASE_URL + GET_PARTY_CONNECTION_URL)
        .then((res) => {
            console.log(res, 'res from api PC');
            const data = res.data.Data;
            const status = res.status;
            return { data, status };
        }).catch((err) => {
            console.log(err);
        })
}

export function post_party_connection_api(action) {
    console.log(action.payload, 'post pc action');

    const connect = {
        Election: action.payload.Election,
        Party: action.payload.Party,
    };
    console.log(connect, 'pc from api');
    return axios
        .get(BASE_URL + POST_PARTY_CONNECTION_URL, action.payload)
        .then((res) => {
            console.log(res, 'res from api PC');
            const data = res.data;
            const status = res.status;
            return { data, status };
        }).catch((err) => {
            console.log(err);
        })
}


export function delete_party_connection_api(action) {
    console.log(action.payload._id);
    return axios
        .delete(BASE_URL + DELETE_PARTY_CONNECTION_URL + action.payload._id)
        .then((res) => {
            console.log(action.payload._id);

            const data = action.payload._id;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}