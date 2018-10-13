import {Map} from 'immutable'

export const SET_CREATE_ORGANIZATION_FIELD = "SET_CREATE_ORGANIZATION_FIELD";
export const CLEAR_CREATE_ORGANIZATION_FIELDS = "CLEAR_CREATE_ORGANIZATION_FIELDS";

export const ORG_DATA_NAME = "name";
export const ORG_DATA_DESC = "desc";
export const ORG_DATA_PIN_TYPE = "pinType";
export const ORG_DATA_ADDRESS_LINE_1 = "addressLine1";
export const ORG_DATA_ADDRESS_LINE_2 = "addressLine2";
export const ORG_DATA_CITY = "city";
export const ORG_DATA_STATE = "state";
export const ORG_DATA_ZIP = "zip";
export const ORG_DATA_COUNTRY = "country";

const initialState = new Map({
    [ORG_DATA_NAME]: "",
    [ORG_DATA_DESC]: "",
    [ORG_DATA_PIN_TYPE]: null,
    [ORG_DATA_ADDRESS_LINE_1]: "",
    [ORG_DATA_ADDRESS_LINE_2]: "",
    [ORG_DATA_CITY]: "",
    [ORG_DATA_STATE]: "",
    [ORG_DATA_ZIP]: "",
    [ORG_DATA_COUNTRY]: "United States"
    });

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CREATE_ORGANIZATION_FIELD:
            return state.set(action.key, action.value);
        case CLEAR_CREATE_ORGANIZATION_FIELDS:
            return initialState;
        default:
            return state;
    }
}
