import {connect} from 'react-redux';
import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {ROUTE_LOGIN} from "../RootComponent";
import MyProfile from "../../containers/profile/MyProfileContainer";

export const ROUTE_DASHBOARD = '/dashboard';
export const ROUTE_ORGANIZATION = '/org';
export const ROUTE_LOGOUT = '/logout';

class ProtectedRoutes extends React.Component {

    render() {
        const { isAuthenticated } = this.props;
        if (!isAuthenticated) {
            return <Redirect to={ROUTE_LOGIN} />
        }
        return (
            <Switch>
                <Route path={ROUTE_DASHBOARD} component={MyProfile} />
                <Redirect to={ROUTE_DASHBOARD}/>
            </Switch>
        )
    }
}

ProtectedRoutes.displayName = 'ProtectedRoutes';

ProtectedRoutes.propTypes = {
    isAuthenticated: PropTypes.bool
};

export default connect(null)(ProtectedRoutes)
