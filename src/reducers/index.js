import {combineReducers}        from 'redux';
import redirectPath             from './RedirectPathReducer';
import myProfileData            from './MyProfileDataReducer';
import Authorized               from './Authorized';

export default () => combineReducers({
    redirectPath,
    myProfileData,
    Authorized
});
