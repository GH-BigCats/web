import {Map} from 'immutable';
export const SET_CREATE_ORG_API_STATUS = "SET_CREATE_ORG_API_STATUS";

export const CREATE_ORG_API_STATUS_KEY = "CREATE_ORG_API_STATUS_KEY";
export const CREATE_ORG_API_STATUS_MESSAGE_KEY = "CREATE_ORG_API_STATUS_MESSAGE_KEY";

export const API_STATUS_IN_PROGRESS = "IN_PROGRESS";
export const API_STATUS_FAILED = "FAILED";
export const API_STATUS_SUCCESS = "SUCCESS";

export default (state = new Map(), action) => {
    switch (action.type) {
        case SET_CREATE_ORG_API_STATUS:
            return new Map({
                [CREATE_ORG_API_STATUS_KEY]: action.status,
                [CREATE_ORG_API_STATUS_MESSAGE_KEY]: action.message
            });
        default:
            return state;
    }
}
