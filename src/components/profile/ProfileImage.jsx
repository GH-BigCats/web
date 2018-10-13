import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileImage extends Component {
    render() {
        const {profileImageUrl} = this.props;
        return (
            <a className="btn-floating waves-effect waves-light profile-image-circle" onClick={this.handleClick}>
                <img
                    aria-label="Click to edit your personal profile image"
                    alt="Profile"
                    src={profileImageUrl}
                />
            </a>
        );
    }
}

ProfileImage.displayName = "ProfileImage";
ProfileImage.propTypes = {
    profileImageUrl: PropTypes.string
};

export default ProfileImage;
