import {connect}        from 'react-redux';
import Logout        from '../../components/auth/Logout';

const mapStateToProps = (state) => ({
    logout: state.userAuth.logout
});

export default connect(mapStateToProps, null)(Logout);
