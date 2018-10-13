export const SET_MY_ORGS = "SET_MY_ORGS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_ORGS:
            return action.orgs;
        default:
            return state;
    }
}
