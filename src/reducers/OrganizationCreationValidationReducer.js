import {Map} from 'immutable'

export const SET_ORG_VALIDATION_STATE = "SET_ORG_VALIDATION_STATE";
export const CLEAR_ORG_VALIDATION_STATE = "CLEAR_ORG_VALIDATION_STATE";

export default (state = new Map(), action) => {
    switch (action.type) {
        case SET_ORG_VALIDATION_STATE:
            return state.set(action.key, action.value);
        case CLEAR_ORG_VALIDATION_STATE:
            return new Map();
        default:
            return state;
    }
}
