import { combineReducers } from "redux";
import electionReducer from "./admin/Election/ElectionReducer";
import partyReducer from "./admin/Party/PartyReducer";
import userReducer from "./admin/User/userReducer";

const rootReducer = combineReducers({
   electionReducer, partyReducer, userReducer
})

export default rootReducer;