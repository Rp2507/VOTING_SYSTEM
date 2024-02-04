import { all } from "@redux-saga/core/effects";
import { handle_delete_election_api_saga, handle_get_election_api_saga, handle_post_election_api_saga } from "./root/Election/rootElection";
import { handle_delete_party_api_saga, handle_get_party_api_saga, handle_post_party_api_saga } from "./root/party/rootParty";
import { handle_delete_user_api_saga, handle_get_user_api_saga, handle_post_user_api_saga } from "./root/User/rootUser";

export function* rootSaga() {
    yield all([handle_get_election_api_saga(), handle_post_election_api_saga(),
    handle_delete_election_api_saga(),
    handle_get_party_api_saga(),
    handle_post_party_api_saga(),
    handle_delete_party_api_saga(),
    handle_get_user_api_saga(), handle_post_user_api_saga(),handle_delete_user_api_saga()])
}