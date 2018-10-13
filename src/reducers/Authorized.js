export const AUTHORIZE_SIGN_IN = "AUTHORIZE_SIGN_IN";
export const AUTHORIZE_SIGN_OFF = "AUTHORIZE_SIGN_OFF";

export default (state = false, action) => {
    switch (action.type) {
        case AUTHORIZE_SIGN_IN:
            return true;
        case AUTHORIZE_SIGN_OFF:
            return false;
        default:
            return state;
    }
}
