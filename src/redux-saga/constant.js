export const BASE_URL = "http://52.65.47.180:4000/v1";

// ============== LOGIN ROUTE ================
export const LOGIN_URL = "/login";

//  ============== ELECTION ROUTE ===============
export const GET_ELECTION_URL = "/elelist"
export const POST_ELECTION_URL = "/ele"
export const UPDATE_ELECTION_URL = "/eleup/:_Id"  //+ID
export const DELETE_ELECTION_URL = "/eledel/:_Id"  //+id 

// ============== PARTY ROUTE ===============
export const GET_PARTY_URL = "/pList"
export const POST_PARTY_URL = "/party"
export const DELETE_PARTY_URL = "/pdel/:_Id" //+_id
export const UPDATE_PARTY_URL = "/pup/:_Id" //+_id

// ============= USER ROUTE ================
export const GET_USER_URL = "/authlist"
export const POST_USER_URL = "/auth"
export const DELETE_USER_URL = "/authdel/:_Id" //+_id
export const UPDATE_USER_URL = "/authup/:_Id" //+_id
