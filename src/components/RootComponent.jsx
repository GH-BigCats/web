import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom'
import NavBarContainer from "../containers/common/NavBarContainer";
import history from '../utils/history';
import LoginContainer from "../containers/auth/LoginContainer";
import ProtectedRoutesContainer from "../containers/auth/ProtectedRoutesContainer";

export const ROUTE_LOGIN = '/login';

const RootComponent = ({store}) => (
    <div>
        <Provider store={store}>
            <div className="app">
                <NavBarContainer />
                <div className="container">
                    <Router history={history}>
                        <Switch>
                            <Route path={ROUTE_LOGIN} component={LoginContainer}/>
                            <ProtectedRoutesContainer/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </Provider>
    </div>
);

RootComponent.displayName = 'RootComponent';

RootComponent.propTypes = {
    store: PropTypes.object.isRequired
};

export default RootComponent;
