import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "muicss/react";
import {ROUTE_DASHBOARD} from "../auth/ProtectedRoutes";
import history from "../../utils/history";

class BackToButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {route} = this.props;

        if (route) {
            return history.push(ROUTE_DASHBOARD);
        }

        history.goBack();

    }

    render() {

        return (
            <Button color="default" className="default-back-button" onClick={this.handleClick}>
                <span className="material-icons back-button-arrow">arrow_back</span>
                <span className="my-text">Back</span>
            </Button>
        );
    }
}

BackToButton.displayName = 'BackToButton';

BackToButton.propTypes = {
    route: PropTypes.string
};

export default BackToButton;