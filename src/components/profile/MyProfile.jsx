import React, { Component } from 'react';
import PropTypes from 'prop-types';
import banner from '../../imgs/homePageBanner.png';
import ProfileImage from "./ProfileImage";
import OrganizationButton from "./OrganizationButton";
import {Button, Divider} from "muicss/react";
import PetProfileImage from "./PetProfileImage";
import LoadingSpinner from "../common/LoadingSpinner";
import history from "../../utils/history";
import {ROUTE_ORGANIZATION} from "../auth/ProtectedRoutes";
import loading from '../../imgs/loading.svg';

// TODO - hook this up to api once we have pet profiles
const MY_PETS = [
    {id: 123},
    {id: 321}
];
// TODO - hook this up to api to get organizations
const MY_ORGS = [
    {id: 123}
];

class MyProfile extends Component {
    constructor(props) {
        super(props);
        const {fetchUserData, fetchUserOrgs} = props;
        fetchUserData();
        fetchUserOrgs();
        //TODO - get auth0 user info on load if we no longer have it in redux store
        this.handleProfileImageClick = this.handleProfileImageClick.bind(this);
        this.handleAddOrgBtnClick = this.handleAddOrgBtnClick.bind(this);
        this.handleAddPetBtnClick = this.handleAddPetBtnClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleProfileImageClick() {
        // TODO - edit profile image?
    }

    handleAddOrgBtnClick() {
        history.push(ROUTE_ORGANIZATION);
    }

    handleAddPetBtnClick() {
        // TODO - link to pet profile creation
    }

    render() {
        const {myUsername, myProfileImageUrl, myPoints, myOrgs} = this.props;

        if (!myUsername || (!myPoints && myPoints !== 0)) {
            // TODO - implement loading spinner
            return <LoadingSpinner />;
        }
        return (
            <div>
                <header className="MyProfile-header">
                    <img src={banner} className="home-banner" alt="logo" onClick={this.handleProfileImageClick} />
                </header>
                <div className={"profile-image-button-container"}>
                    <ProfileImage profileImageUrl={myProfileImageUrl} />
                </div>
                <h1>{myUsername}</h1>
                <h3>Points: {myPoints}</h3>
                <Divider/>
                    <h2>My Pets</h2>
                <div className="profile-image-circle-mini-container">
                    {MY_PETS.map((pet) => <PetProfileImage key={pet.id}/>)}
                    <Button variant="fab" color="primary" onClick={this.handleAddPetBtnClick}>+</Button>
                </div>
                <Divider/>
                <h2>My Organizations</h2>
                {myOrgs
                    ? <div className="profile-image-circle-mini-container">
                        {myOrgs.map((org) => <OrganizationButton key={org.id} organizationId={org.id}/>)}
                        <Button variant="fab" color="primary" onClick={this.handleAddOrgBtnClick}>+</Button>
                    </div>
                    : <img src={loading} alt="loading"/>
                }
            </div>
        );
    }
}

MyProfile.displayName = "My Profile";
MyProfile.propTypes = {
    myUsername: PropTypes.string,
    myPoints: PropTypes.number,
    myProfileImageUrl: PropTypes.string,
    myOrgs: PropTypes.array,
    fetchUserData: PropTypes.func.isRequired,
    fetchUserOrgs: PropTypes.func.isRequired
};

export default MyProfile;
