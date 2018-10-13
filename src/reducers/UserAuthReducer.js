import Auth0 from "../auth/UserAuth";

export const SET_AUTH_0_RESPONSE = "SET_AUTH_0_RESPONSE";

export default (state = new Auth0(), action) => {
    switch (action.type) {
        case SET_AUTH_0_RESPONSE:
            return Object.assign({}, state, {response: action.response});
        default:
            return state;
    }
}
