export const SET_REDIRECT_PATH = "SET_REDIRECT_PATH";

export default (state = null, action) => {
    switch (action.type) {
        case SET_REDIRECT_PATH:
            return action.redirectPath;
        default:
            return state;
    }
}
