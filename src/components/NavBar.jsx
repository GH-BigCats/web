import React, { Component } from 'react';
import {ROUTE_LOGOUT, ROUTE_DASHBOARD} from "./auth/ProtectedRoutes";
import PropTypes from "prop-types";

class NavBar extends Component {
    isNavItemActive(navRoute) {
        return window.location.pathname === navRoute ? "active" : "";
    }
    render() {
        const {isAuthenticated} = this.props;
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand mr-auto mr-lg-0" href="/">Path Forward</a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="main-nav-bar-buttons">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className={`nav-link ${this.isNavItemActive(ROUTE_DASHBOARD)}`} href={ROUTE_DASHBOARD}>Dashboard</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        {isAuthenticated &&
                            <li className="nav-item">
                                <a className={`nav-link`} href={ROUTE_LOGOUT}>Log Out</a>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

NavBar.displayName = 'NavBar';

NavBar.propTypes = {
    isAuthenticated: PropTypes.bool
};

export default NavBar;
