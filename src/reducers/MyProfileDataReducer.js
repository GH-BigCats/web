export const SET_MY_PROFILE_DATA = "SET_MY_PROFILE_DATA";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_PROFILE_DATA:
            return action.data;
        default:
            return state;
    }
}
