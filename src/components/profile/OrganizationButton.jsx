import React, {Component} from 'react';
import PropTypes from 'prop-types';
import history from "../../utils/history";
import {ROUTE_ORGANIZATION} from "../auth/ProtectedRoutes";

class OrganizationButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {organizationId} = this.props;
        history.push(`${ROUTE_ORGANIZATION}/${organizationId}`);
    }

    render() {
        const {organizationImage} = this.props;
        const btnImg = organizationImage || "https://cdn2.iconfinder.com/data/icons/buildings-places-2/48/v-10-512.png";

        return (
            <a className="btn-floating waves-effect waves-light profile-image-circle-mini" onClick={this.handleClick}>
                <img
                    aria-label="Click to view your Organization's Profile"
                    alt="Organization Profile Button"
                    style={{width: "100%"}}
                    src={btnImg}
                />
            </a>
        );
    }
}

OrganizationButton.displayName = "OrganizationButton";
OrganizationButton.propTypes = {
    organizationId: PropTypes.number.isRequired,
    organizationImage: PropTypes.string
};

export default OrganizationButton;
