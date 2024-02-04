import axios from "axios"
import { BASE_URL, GET_PARTY_CONNECTION_URL } from "../../constant"

export function get_party_connection_api(){
    return axios
    .get(BASE_URL + GET_PARTY_CONNECTION_URL )
    .then((res) => {
        console.log(res , 'res from api PC');
        const data = res.data.Data;
        const status = res.status;
        return { data, status };
    }).catch((err) => {
        console.log(err);
    })
}