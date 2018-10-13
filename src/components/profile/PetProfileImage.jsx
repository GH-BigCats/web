import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PetProfileImage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        //TODO - redirect to pet profile
    }

    render() {
        const {petProfileImage} = this.props;
        const btnImg = petProfileImage || "https://pawedin.com/system/pets/default_images/default_pet.jpg";

        return (
            <a className="btn-floating waves-effect waves-light profile-image-circle-mini" onClick={this.handleClick}>
                <img
                    aria-label="Click to navigate to this pet's profile"
                    alt="Pet Profile Button"
                    src={btnImg}
                />
            </a>
        );
    }
}

PetProfileImage.displayName = "PetProfileImage";
PetProfileImage.propTypes = {
    petId: PropTypes.number,
    petProfileImage: PropTypes.string
};

export default PetProfileImage;
