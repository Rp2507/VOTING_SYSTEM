import { call , put } from "redux-saga/effects";
import { get_party_connection_api } from "../../../admin/Party-Connection/PartyConnectionApi";
import { GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_SUCCESS } from "../../../admin/Party-Connection/PartyConnectionAction";

export function* handle_get_party_connection_api(action){
    try{
        const res = yield call(get_party_connection_api, action);
        console.log(res , 'res from manage PC');
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: GET_PARTY_CONNECTION_SUCCESS, data });
        } else {
            yield put({ type: GET_PARTY_CONNECTION_ERROR, data });
        }
    }catch(err){
        yield put({ type: GET_PARTY_CONNECTION_ERROR, err });
        // console.log(err);
    }
}