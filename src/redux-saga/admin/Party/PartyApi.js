import axios from "axios";
import { BASE_URL, GET_PARTY_URL, POST_PARTY_URL } from "../../constant";

export function get_party_api() {
    return axios.get(BASE_URL + GET_PARTY_URL).then((res) => {
        console.log(res);

        const data = res.data;
        const status = res.status
        return {
            data, status
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function post_party_api(action) {
    return axios
        .post(BASE_URL + POST_PARTY_URL, action.payload)
        .then((res) =>{
            console.log(res , 'from post party api');
            const data = res.data;
            const status = res.status;
            return { data, status };
        })
        .catch((err) => {
            console.log(err);
        })
}

