import React, { Component } from 'react';
import PropTypes from "prop-types";
import history from "../../utils/history";
import {ROUTE_LOGIN} from "../RootComponent";

class Logout extends Component {
    render() {
        const {logout} = this.props;
        logout();
        return null;
    }
}

Logout.displayName = 'Logout';

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default Logout;
