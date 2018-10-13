import React, { Component } from 'react';
import PropTypes from "prop-types";
import history from "../../utils/history";
import {ROUTE_DASHBOARD} from "./ProtectedRoutes";

class Login extends Component {
    componentDidMount() {
        const {isAuthenticated} = this.props;
        if (isAuthenticated) {
            history.replace(ROUTE_DASHBOARD);
        }
    }

    render() {
        const { login } = this.props;
        return (
            <div className="login">
                <button className="btn" onClick={login}>Log In</button>
            </div>
        );
    }
}

Login.displayName = 'Login';

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired
};

export default Login;
