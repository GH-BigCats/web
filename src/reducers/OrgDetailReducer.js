export const SET_ORG_DETAILS = "SET_ORG_DETAILS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_ORG_DETAILS:
            return action.details;
        default:
            return state;
    }
}
