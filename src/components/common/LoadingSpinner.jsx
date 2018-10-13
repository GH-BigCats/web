import React, {Component} from 'react';
import PropTypes from 'prop-types'
import loading from '../../imgs/loading.svg';

class LoadingSpinner extends Component {
    render() {
        const style = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
        };

        const {inline} = this.props;

        if (inline) {
            return <img src={loading} alt="loading"/>;
        }

        return (
            <div style={style}>
                <img src={loading} alt="loading"/>
            </div>
        );
    }
}

LoadingSpinner.displayName = 'LoadingSpinner';
LoadingSpinner.propTypes = {
    inline: PropTypes.bool
};

export default LoadingSpinner;