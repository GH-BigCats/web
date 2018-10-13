import {connect}        from 'react-redux';
import Login        from '../../components/auth/Login';
import {login} from '../../actions/login';

const mapStateToProps = (state) => ({
    isAuthenticated: state.Authorized
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
