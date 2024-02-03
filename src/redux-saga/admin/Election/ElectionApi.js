import { BASE_URL, GET_ELECTION_URL, POST_ELECTION_URL } from "../../constant";
import axios from "axios";

// get election function
export async function get_election_api() {
    return axios.get(BASE_URL + GET_ELECTION_URL).then((res) => {
        // console.log(res, 'res from get ele api');
        const data = res.data;
        const status = res.status;
        return { data, status }
    }).catch((err) => {
        console.log(err);
    })
}

// add election function
export function post_election_api(action) {
    return axios.post(BASE_URL+POST_ELECTION_URL, action.payload).then((res) => {
        console.log(res, 'res from post ele api');
        // const data = res.data;
        // const status = res.status;
        // return { data, status }
    }).catch((err) => {
        console.log(err);
    })
}
