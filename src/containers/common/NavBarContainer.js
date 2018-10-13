import {connect}        from 'react-redux';
import NavBar        from '../../components/NavBar';

const mapStateToProps = (state) => ({
    isAuthenticated: state.Authorized
});

export default connect(mapStateToProps, null)(NavBar);
