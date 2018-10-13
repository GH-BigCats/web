import {AUTHORIZE_SIGN_IN} from "../reducers/Authorized";

export const login = (dispatch) => {
    dispatch({type: AUTHORIZE_SIGN_IN})
};
