import { takeLatest } from "redux-saga/effects";
import { GET_PARTY_CONNECTION_PROGRESS } from "../../../admin/Party-Connection/PartyConnectionAction";
import { handle_get_party_connection_api } from "../../admin/Party-Connection/managePartyConnection";

export function* handle_get_party_connection_api_saga(){
    yield takeLatest(GET_PARTY_CONNECTION_PROGRESS , handle_get_party_connection_api)
}