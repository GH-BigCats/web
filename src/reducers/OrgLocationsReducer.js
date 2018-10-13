import {List} from 'immutable';

export const SET_ORG_LOCATIONS = "SET_ORG_LOCATIONS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_ORG_LOCATIONS:
            return new List(action.locations);
        default:
            return state;
    }
}
