import {connect} from 'react-redux';
import ProtectedRoutes from "../../components/auth/ProtectedRoutes";
import {SET_REDIRECT_PATH} from "../../reducers/RedirectPathReducer";

const mapStateToProps = (state) => ({
    isAuthenticated: state.Authorized
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setIntendedPathAsRedirectPath: () => dispatch({type: SET_REDIRECT_PATH, redirectPath: ownProps.location.pathname})
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
