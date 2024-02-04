import { GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_PROGRESS, GET_PARTY_CONNECTION_SUCCESS } from "./PartyConnectionAction";

const initialState = {
    data: [],
    isLoding: false,
    isError: null,
};

const partyConnectionReducer = (state = {...initialState}, action) => {
    console.log(action, 'action from reducer PC');

    switch(action.type){
        case GET_PARTY_CONNECTION_PROGRESS:
            return{
                ...state,
                isLoading: true,
                isError: null,
            }

         case GET_PARTY_CONNECTION_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.data.Data,
                isError: null,
            }  
          
          case GET_PARTY_CONNECTION_ERROR: 
          return{
                ...state,
                isLoading: false,
                isError: action.data
          }
          
          default:{
            return{
                ...state
            }
          }
    }
}

export default partyConnectionReducer