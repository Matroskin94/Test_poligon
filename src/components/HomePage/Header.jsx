import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <div>
        <h1>Умный дом!!! {String(props.homeState)}</h1>
    </div>
);

Header.propTypes = {
    homeState: PropTypes.bool
};

Header.defaultProps = {
    homeState: false
};

export default Header;
