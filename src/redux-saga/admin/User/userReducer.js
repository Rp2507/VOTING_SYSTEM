import { POST_ELECTION_SUCCESS } from "../Election/ElectionAction";
import { GET_USER_ERROR, GET_USER_PROGRESS, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_PROGRESS, POST_USER_SUCCESS } from "./userAction";

const initialState = {
    user: [],
    isLoading: false,
    isError: null,
}

const userReducer = (state = {...initialState}, action) => {
    console.log(action , 'action from reducer');

    switch(action.type){
        case GET_USER_PROGRESS:{
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: null,
                data: action.data.Data
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }

        // case POST_USER_PROGRESS:{
        //     return{
        //         ...state,
        //         isLoading: true,
        //         isError: null,
        //     }
        // }

        // case POST_USER_SUCCESS:{
        //     return{
        //         ...state,
        //         isLoading: false,
        //         user: state.user.concat(action.data),
        //         isError: null,
        //     }
        // }

        // case POST_USER_ERROR:{
        //     return{
        //         ...state,
        //         isLoading: false,
        //         isError: action.data,
        //     }
        // }

        default:
            return state;
    }
}

export default userReducer;