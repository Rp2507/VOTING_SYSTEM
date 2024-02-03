import axios from "axios";
import { BASE_URL, GET_USER_URL, POST_USER_URL } from "../../constant";

// get user function
export function get_user_api(){
    return axios
    .get(BASE_URL + GET_USER_URL)
    .then((res) => {
        console.log(res, 'res from user api');
        const data = res.data;
        const status = res.status
        return {
            data, status
        } 
    }).catch((err) => {
        console.log(err);
    })
}

// post user function
export function post_user_api(action){
    return axios.post(BASE_URL + POST_USER_URL, action.payload).then((res) => {
        console.log(res, 'res from user post api');
        // const data = res.data;
        // const status = res.status
        // return {
        //     data, status
        // } 
    }).catch((err) => {
        console.log(err);
    })
}